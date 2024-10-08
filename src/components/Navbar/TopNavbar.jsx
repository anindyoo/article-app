import LogoLink from './LogoLink';
import NavLinks from './NavLinks';

const TopNavbar = () => (
  <nav className="
  Top-NAVBAR
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
      <LogoLink />
      <NavLinks />
    </div>
  </nav>
);

export default TopNavbar;
