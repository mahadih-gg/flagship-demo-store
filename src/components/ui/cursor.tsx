
import {
  AnimatePresence,
  motion,
  useMotionValue
} from "motion/react";
import { useEffect, useImperativeHandle, useLayoutEffect, useRef, useState } from "react";

import {
  cx,
  MouseTrackerContext,
  useMouseTracker,
  type MouseTrackerContextType,
  type MouseTrackerProviderProps,
  type PointerFollowerProps,
  type PointerProps,
} from "./cursor-utils";

function MouseTrackerProvider({
  ref,
  children,
  isHovering,
  ...rest
}: MouseTrackerProviderProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(isHovering);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => wrapperRef.current as HTMLDivElement);
  const latestMouseEventRef = useRef<MouseEvent | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const container = wrapper.parentElement;
    if (!container) return;

    if (getComputedStyle(container).position === "static") {
      container.style.position = "relative";
    }

    const updatePosition = (e: MouseEvent) => {
      latestMouseEventRef.current = e;
      const bounds = container.getBoundingClientRect();
      setPosition({ x: e.clientX - bounds.left, y: e.clientY - bounds.top });
      setActive(true);
    };

    const clearPosition = () => setActive(false);

    container.addEventListener("mousemove", updatePosition);
    container.addEventListener("mouseleave", clearPosition);

    // ✅ Final fix: smooth + safe scroll handling
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const e = latestMouseEventRef.current;
          if (!e) {
            ticking = false;
            return;
          }

          const bounds = container.getBoundingClientRect();
          const isInside =
            e.clientX >= bounds.left &&
            e.clientX <= bounds.right &&
            e.clientY >= bounds.top &&
            e.clientY <= bounds.bottom;

          if (isInside) {
            const localX = e.clientX - bounds.left;
            const localY = e.clientY - bounds.top;
            setPosition({ x: localX, y: localY }); // ✅ Just update position
            setActive(true);
          } else {
            setActive(false); // ❌ hide when mouse is out
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, true); // use capture phase

    return () => {
      container.removeEventListener("mousemove", updatePosition);
      container.removeEventListener("mouseleave", clearPosition);
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, []);

  useEffect(() => {
    const container = wrapperRef.current?.parentElement;
    if (!container) return;

    if (active) {
      container.classList.add("cursor-force-none");
    } else {
      container.classList.remove("cursor-force-none");
    }
  }, [active]);


  return (
    <MouseTrackerContext.Provider
      value={{ position, active, wrapperRef, pointerRef }}
    >
      <div ref={wrapperRef} data-role="tracker-wrapper" {...rest}>
        {children}
      </div>
    </MouseTrackerContext.Provider>
  );
}

function Pointer({ ref, className, style, children, ...rest }: PointerProps) {
  const { position, active, wrapperRef, pointerRef } = useMouseTracker();
  useImperativeHandle(ref, () => pointerRef.current as HTMLDivElement);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const container = wrapperRef.current?.parentElement;
    if (container && active) container.style.cursor = "none";

    return () => {
      if (container) container.style.cursor = "default";
    };
  }, [active, wrapperRef]);

  useEffect(() => {
    x.set(position.x);
    y.set(position.y);
  }, [position, x, y]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          ref={pointerRef}
          data-role="custom-pointer"
          className={cx(
            "pointer-events-none z-[9999] absolute transform -translate-x-1/2 -translate-y-1/2",
            className
          )}
          style={{ top: y, left: x, ...style }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
function PointerFollower({
  ref,
  align = "bottom-right",
  gap = 10,
  children,
  className,
  style,
  ...rest
}: PointerFollowerProps) {
  const { position, active, pointerRef } = useMouseTracker();
  const followerRef = useRef<HTMLDivElement>(null);
  useImperativeHandle(ref, () => followerRef.current as HTMLDivElement);

  const [offset, setOffset] = useState<{ x: number; y: number } | null>(null);
  const [ready, setReady] = useState(false); // ✅ wait until element is measured

  // Measure offset AFTER follower renders
  useLayoutEffect(() => {
    if (!followerRef.current || !active) return;

    const box = followerRef.current.getBoundingClientRect();
    const w = box.width;
    const h = box.height;

    let x = 0;
    let y = 0;

    switch (align) {
      case "center":
        x = w / 2;
        y = h / 2;
        break;
      case "top":
        x = w / 2;
        y = h + gap;
        break;
      case "top-left":
        x = w + gap;
        y = h + gap;
        break;
      case "top-right":
        x = -gap;
        y = h + gap;
        break;
      case "bottom":
        x = w / 2;
        y = -gap;
        break;
      case "bottom-left":
        x = w + gap;
        y = -gap;
        break;
      case "bottom-right":
        x = -gap;
        y = -gap;
        break;
      case "left":
        x = w + gap;
        y = h / 2;
        break;
      case "right":
        x = -gap;
        y = h / 2;
        break;
    }

    setOffset({ x, y });
    setReady(true); // ✅ follower is now measurable
  }, [align, gap, active, children]);

  const pointerBox = pointerRef.current?.getBoundingClientRect();
  const pw = pointerBox?.width ?? 20;
  const ph = pointerBox?.height ?? 20;

  const x = position.x - (offset?.x ?? 0) + pw / 2;
  const y = position.y - (offset?.y ?? 0) + ph / 2;

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          ref={followerRef}
          data-role="pointer-follower"
          className={cx(
            "pointer-events-none z-[9998] absolute transform -translate-x-1/2 -translate-y-1/2 font-medium whitespace-nowrap",
            className
          )}
          style={{
            top: ready ? y : -9999,
            left: ready ? x : -9999,
            ...style,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          {...rest}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}


export {
  MouseTrackerProvider,
  Pointer,
  PointerFollower,
  useMouseTracker,
  type MouseTrackerContextType as CursorContextType,
  type PointerFollowerProps as CursorFollowProps,
  type PointerProps as CursorProps,
  type MouseTrackerProviderProps as CursorProviderProps
};

