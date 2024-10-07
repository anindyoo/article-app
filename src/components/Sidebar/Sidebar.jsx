import constants from '../../constants/constants';
import SidebarItem from './SidebarItem';

const Sidebar = () => {
  const { categoriesExtras } = constants;

  return (
    <aside className="
    SIDEBAR"
    >
      <section className="
      SIDEBAR-TITLE
      RALEWAY-FONT text-[1.75rem]/[1.1785em] font-bold"
      >
        Explore Categories
      </section>
      <ul className="
      SIDEBAR-ITEMS-LIST
      flex flex-col gap-7
      mt-7"
      >
        {categoriesExtras.slice(0, 3).map((item) => (
          <li key={item.id}>
            <SidebarItem icon={item.icon} color={item.color} />
          </li>
        ))}
        <li><SidebarItem more /></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
