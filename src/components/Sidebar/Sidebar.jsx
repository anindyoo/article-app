import constants from '../../constants/constants';
import SidebarArticleItem from './SidebarArticleItem';
import SidebarItem from './SidebarItem';

const Sidebar = (props) => {
  const {
    data,
    isLoading,
    relatedArticles,
  } = props;
  const { categoriesExtras } = constants;

  return (
    <aside className={`
    SIDEBAR
    ${relatedArticles ? 'h-fit mt-10 lg:mt-40' : ''}`}
    >
      <section className="
      SIDEBAR-TITLE
      RALEWAY-FONT
      text-[1.75rem]/[1.1785em] font-bold
      text-center lg:text-left"
      >
        {relatedArticles ? 'More Like This' : 'Explore Categories'}
      </section>
      {!isLoading ? (
        <ul className="
        SIDEBAR-ITEMS-LIST
        flex flex-col gap-7 items-center
        mt-7"
        >
          {!relatedArticles
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
            }) : (
              data.map((item) => (
                <li key={item.id}>
                  <SidebarArticleItem
                    id={item.id}
                    slug={item.slug}
                    title={item.title}
                  />
                </li>
              ))
            )}
          {!relatedArticles ? (
            <li><SidebarItem more /></li>
          ) : ''}
        </ul>
      ) : 'Loading...'}
    </aside>
  );
};

export default Sidebar;
