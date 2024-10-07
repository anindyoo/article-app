import { Link, NavLink, useLocation } from 'react-router-dom';

const links = [
  { name: 'Home', link: '' },
  { name: 'All Articles', link: 'articles' },
  { name: 'Categories', link: 'categories' },
];

const LogoLink = () => (
  <Link
    to="/"
    className="text-2xl font-bold"
  >
    Articles
  </Link>
);

const Header = () => {
  const location = useLocation();

  return (
    <nav className="
    HEADER-NAVBAR
    fixed z-50
    w-full h-14
    bg-yellow-200"
    >
      <div className="
      NAVBAR-CONTAINER
      SECTION-CENTER RALEWAY-FONT
      flex flex-row items-center gap-12
      h-14"
      >
        {location.pathname === '/' ? (
          <h1 className="LOGO">
            <LogoLink />
          </h1>
        ) : (
          <div className="LOGO">
            <LogoLink />
          </div>
        )}
        <ul className="
        NAV-LINKS
        flex flex-row gap-8 items-center
        text-xl font-medium"
        >
          {links.map((item) => (
            <li key={item.link}>
              <NavLink to={`/${item.link}`}>
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
