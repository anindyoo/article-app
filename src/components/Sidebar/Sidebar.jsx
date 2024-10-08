import constants from '../../constants/constants';
import SidebarItem from './SidebarItem';

const Sidebar = (props) => {
  const { data, isLoading } = props;
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
        {!isLoading
          ? data.slice(0, 3).map((item) => {
            const additionalExtras = categoriesExtras.find((extra) => extra.id === item?.id);

            return (
              <li key={item.id}>
                <SidebarItem
                  id={item.id}
                  name={item.name}
                  icon={additionalExtras.icon}
                  color={additionalExtras.color}
                />
              </li>
            );
          }) : 'Loading...'}
        <li><SidebarItem more /></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
