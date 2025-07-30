import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/web-shorts';
import { useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import CursorSvg from './svg/CursorSvg';
import {
  Pointer as Cursor,
  PointerFollower as CursorFollow,
  MouseTrackerProvider as CursorProvider,
} from "./ui/cursor";

const EntryPointWrapper = ({ id, skeletonType, skeletonSize }: { id: string, skeletonType: EntryPointType, skeletonSize: EntryPointSize }) => {
  const { width } = useWindowSize();

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <EntryPoint
        id={id}
        skeletonType={skeletonType}
        skeletonSize={skeletonSize}
      />
      {
        width > 1024 && (
          <CursorProvider isHovering={isHovering}>
            <Cursor>
              <CursorSvg />
            </Cursor>
            <CursorFollow align="bottom-right">
              <div
                className="text-lg text-white px-1.5 py-0.5 rounded-md font-neue-plak font-semibold whitespace-nowrap"
                style={{
                  background: "linear-gradient(275deg, #FFD53C 4.07%, #F40A35 46.16%, #D612C8 95.93%)",
                }}
              >
                Horizon Shorts
              </div>
            </CursorFollow>
          </CursorProvider>
        )}
    </div>
  );
};

export default EntryPointWrapper;