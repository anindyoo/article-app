import { Link } from 'react-router-dom';

const ArticleCard = (props) => {
  const {
    slug,
    title,
    category,
    image,
    imageAlt,
  } = props;

  return (
    <Link
      to={`/articles/${slug}`}
    >
      <div className="
      ARTICLE-CARD
      border
      rounded-xl
      shadow-lg
      overflow-hidden"
      >
        <img
          src={image}
          alt={imageAlt}
          className="
          w-full h-64
          object-cover"
        />
        <div className="
        ARTICLE-INFO
        flex flex-col gap-2
        px-4 pt-4 pb-5"
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
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
