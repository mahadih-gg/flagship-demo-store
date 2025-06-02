import { TbLoader2 } from 'react-icons/tb';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-52">
      <TbLoader2 className="text-4xl text-blue-500 animate-spin" />
    </div>
  );
};

export default Loading;