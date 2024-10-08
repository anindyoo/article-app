const CategoryBadge = (props) => {
  const { name } = props;

  return (
    <div className="
    ARTICLE-CATEGORY
    RALEWAY-FONT
    w-fit
    px-2 py-1
    text-sm font-semibold
    rounded-md
    bg-yellow-200 bg-opacity-90"
    >
      {name}
    </div>
  );
};

export default CategoryBadge;
