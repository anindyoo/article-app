import LogoLink from './LogoLink';
import NavLinks from './NavLinks';

const TopNavbar = () => (
  <nav className="
  Top-NAVBAR
  fixed z-50
  w-full h-24 lg:h-14
  bg-yellow-200"
  >
    <div className="
    NAVBAR-CONTAINER
    SECTION-CENTER RALEWAY-FONT
    flex flex-col lg:flex-row items-center gap-4 lg:gap-12
    h-14
    mt-2 lg:mt-0"
    >
      <LogoLink />
      <NavLinks />
    </div>
  </nav>
);

export default TopNavbar;
