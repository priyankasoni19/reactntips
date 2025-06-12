import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div style={{ display: 'flex', height: '100vh' }}>
    <Sidebar />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ padding: 20, flex: 1, overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  </div>
);
export default Layout;
