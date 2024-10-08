import { NavLink } from 'react-router-dom';

const links = [
  { name: 'Home', link: '' },
  { name: 'All Articles', link: 'articles' },
  { name: 'Categories', link: 'categories' },
];

const NavLinks = () => (
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
);

export default NavLinks;
