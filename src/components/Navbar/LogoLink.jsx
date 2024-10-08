import { Link, useLocation } from 'react-router-dom';

const Logo = () => (
  <Link
    to="/"
    className="text-lg lg:text-2xl font-bold"
  >
    Articles
  </Link>
);

const LogoLink = () => {
  const location = useLocation();

  return location.pathname === '/' ? (
    <h1 className="LOGO">
      <Logo />
    </h1>
  ) : (
    <div className="LOGO">
      <Logo />
    </div>
  );
};

export default LogoLink;
