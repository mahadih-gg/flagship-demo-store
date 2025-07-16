import { Outlet } from 'react-router';
import DemoFooter from '../components/demo/DemoFooter';
import DemoHeader from '../components/demo/DemoHeader';
import FlagshipWrapper from '../components/FlagshipWrapper';

const DemoLayout = () => {
  return (
    <FlagshipWrapper tenant="telco">
      <main className="demo-wrapper">
        <DemoHeader />
        <Outlet />
        <DemoFooter />
      </main>
    </FlagshipWrapper>
  );
};

export default DemoLayout;