import { Link } from 'react-router-dom';
import CategoryBadge from '../CategoryBadge/CategoryBadge';

const ArticleCard = (props) => {
  const {
    slug,
    title,
    categories,
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
          <ul className="CATEGORIES-LIST flex flex-row gap-2">
            {categories && categories.map((cat) => (
              <li key={cat.id}>
                <CategoryBadge name={cat.name} />
              </li>
            ))}
          </ul>
          <h2 className="text-2xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
