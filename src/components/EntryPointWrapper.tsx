import { EntryPoint, EntryPointSize, EntryPointType } from '@thinkflagship/horizon-web-shorts-staging';
import { useEffect, useRef, useState } from 'react';
import useWindowSize from '../hooks/useWindowSize';
import CursorSvg from './svg/CursorSvg';
import {
  Pointer as Cursor,
  PointerFollower as CursorFollow,
  MouseTrackerProvider as CursorProvider,
} from "./ui/cursor";

const EntryPointWrapper = ({ id, skeletonType, skeletonSize }: { id: string, skeletonType: EntryPointType, skeletonSize: EntryPointSize }) => {
  const { width } = useWindowSize();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [suppressCursor, setSuppressCursor] = useState(false);

  // 👇 Reset cursor suppression on hover
  useEffect(() => {
    if (isHovering) {
      setSuppressCursor(false);
    }
  }, [isHovering]);

  // 👇 Detect outside focus after click (modal open)
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) return;

      // After short delay, check if focus left
      setTimeout(() => {
        const active = document.activeElement;
        const clickedOutside =
          active === document.body || !wrapperRef.current?.contains(active);
        if (clickedOutside) {
          setSuppressCursor(true); // modal likely opened
          wrapperRef.current?.classList.remove("cursor-force-none");
        }
      }, 100);
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div
      ref={wrapperRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <EntryPoint
        id={id}
        skeletonType={skeletonType}
        skeletonSize={skeletonSize}
      />
      {
        width > 1024 && isHovering && !suppressCursor && (
          <CursorProvider>
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