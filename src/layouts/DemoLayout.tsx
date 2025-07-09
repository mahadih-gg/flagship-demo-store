import { Outlet } from 'react-router';
import DemoFooter from '../components/demo/DemoFooter';
import DemoHeader from '../components/demo/DemoHeader';

const DemoLayout = () => {
  return (
    <>
      <DemoHeader />
      <Outlet />
      <DemoFooter />
    </>
  );
};

export default DemoLayout;