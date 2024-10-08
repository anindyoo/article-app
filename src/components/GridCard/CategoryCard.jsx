import { Link } from 'react-router-dom';

const CategoryCard = (props) => {
  const {
    id,
    title,
    icon,
  } = props;

  return (
    <Link
      to={`/categories/${id}`}
    >
      <div className="
      CATEGORY-CARD
      px-6 py-4
      border
      rounded-xl
      shadow-lg
      overflow-hidden"
      >
        <div className="
        CARD-INFO
        flex flex-row gap-6 items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
            <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
          </svg>
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
