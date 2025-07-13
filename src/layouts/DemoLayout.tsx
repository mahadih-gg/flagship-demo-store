import { Outlet } from 'react-router';
import DemoFooter from '../components/demo/DemoFooter';
import DemoHeader from '../components/demo/DemoHeader';

const DemoLayout = () => {
  return (
    <main className="demo-wrapper">
      <DemoHeader />
      <Outlet />
      <DemoFooter />
    </main>
  );
};

export default DemoLayout;