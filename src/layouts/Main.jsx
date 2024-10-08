import { Outlet } from 'react-router-dom';
import TopNavbar from '../components/Navbar/TopNavbar';
import BottomNavbar from '../components/Navbar/BottomNavbar';

const Main = () => (
  <>
    <TopNavbar />
    <main className="main-section">
      <div className="BUFFER h-24 lg:h-14 mb-14" />
      <Outlet />
      {/* <div className="BUFFER h-36 mt-16" /> */}
    </main>
    <BottomNavbar />
  </>
);

export default Main;
