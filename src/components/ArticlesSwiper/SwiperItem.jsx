import { Link } from 'react-router-dom';
import constants from '../../constants/constants';

const SwiperItem = (props) => {
  const { title, slug, category } = props;
  const { categoriesExtras, uncategorizedExtra } = constants;

  const articleExtras = categoriesExtras.find((item) => item.id === category?.id);

  return (
    <div className="
    SWIPER-ITEM
    flex items-end
    w-[58rem] h-[39.375rem]"
    >
      <div className="
      ARTICLE-INFO
      flex flex-col gap-2
      px-10 pb-[4.5rem]"
      >
        <div className="
        ARTICLE-CATEGORY
        RALEWAY-FONT
        w-fit
        px-2 py-1
        text-xs font-semibold
        rounded-md
        bg-yellow-400 bg-opacity-90"
        >
          {category ? category.name : 'Uncategorized'}
        </div>
        <h2 className="ARTICLE-TITLE text-6xl font-bold text-white">{title}</h2>
        <Link
          to={`/articles/${slug}`}
          className="RALEWAY-FONT mt-4 text-xl font-medium underline underline-offset-4 text-white"
        >
          Read Article
        </Link>
      </div>
      <div className="
      ITEM-IMAGE
      absolute top-0 -z-10"
      >
        <div className="
        FADE-OVERLAY
        absolute z-10
        bg-black
        w-[58rem] h-[39.375rem]"
        />
        <img
          src={articleExtras ? articleExtras.image : uncategorizedExtra.image}
          alt={articleExtras ? articleExtras.imageAlt : uncategorizedExtra.imageAlt}
          className="w-[58rem] h-[39.375rem]"
        />
      </div>
    </div>
  );
};

export default SwiperItem;
