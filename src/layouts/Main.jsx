import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';

const Main = () => (
  <>
    <Header />
    <main className="main-section">
      <div className="BUFFER h-28" />
    </main>
    <Outlet />
  </>
);

export default Main;
