import { Link } from 'react-router-dom';

const SidebarArticleItem = (props) => {
  const {
    title,
    slug,
  } = props;

  return (
    <Link
      to={`/articles/${slug}`}
    >
      <div className="
      SIDEBAR-ITEM
      flex flex-col
      w-60 h-20
      px-3 py-4
      rounded-xl
      border"
      >
        <div className="
        RALEWAY-FONT
        text-xl font-bold"
        >
          {title}
        </div>
      </div>
    </Link>
  );
};

export default SidebarArticleItem;
