import LogoLink from './LogoLink';
import NavLinks from './NavLinks';

const BottomNavbar = () => (
  <div className="
  BOTTOM-NAVBAR
  sticky bottom-0
  w-full h-36
  mt-16
  bg-yellow-200"
  >
    <div className="
    NAVBAR-CONTAINER
    SECTION-CENTER RALEWAY-FONT
    flex flex-col gap-4
    h-14
    pt-5"
    >
      <LogoLink />
      <NavLinks />
    </div>
  </div>
);

export default BottomNavbar;
