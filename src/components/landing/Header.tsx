import { useState } from 'react';
import { Link } from 'react-router';
import HorizonLogo from '../svg/HorizonLogo';
import PlayIcon from '../svg/play.icon';
import Button from '../ui/Button';
import GetAccessModal from './GetAccessModal';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="landing-container pt-5 md:pt-0">
      <div className="flex justify-between items-center">
        <Link to="/">
          <HorizonLogo />
        </Link>
        <div className='flex items-center gap-6 lg:gap-2'>
          <Button
            link='#demo-section'
            variant='ghost'
            icon={<span className='text-2xl 2xl:text-[34px]'><PlayIcon /></span>}
            className='hidden sm:flex px-0'
          >
            Watch Demo
          </Button>

          <Button size='xl' onClick={() => setIsModalOpen(true)}>
            Request Early Access
          </Button>
        </div>
      </div>

      <GetAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </header>
  );
};

export default Header;