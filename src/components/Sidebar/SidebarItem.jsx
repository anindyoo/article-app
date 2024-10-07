import { Link } from 'react-router-dom';

const SidebarItem = (props) => {
  const {
    icon,
    more,
  } = props;

  return (
    <div className="
    SIDEBAR-ITEM
    flex flex-col justify-center items-center gap-1
    w-60 h-40
    rounded-xl
    border"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10">
        <path strokeLinecap="round" strokeLinejoin="round" d={more ? 'M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z' : icon} />
      </svg>
      {more ? (
        <Link to="/categories" className="text-base font-bold">All Categories</Link>
      ) : (
        <h3 className="CATEGORY-NAME text-base font-bold">Category</h3>
      )}
    </div>
  );
};

export default SidebarItem;
