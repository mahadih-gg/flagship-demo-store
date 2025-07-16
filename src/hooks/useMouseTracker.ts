import * as React from "react";

export type MouseTrackerContextType = {
  position: { x: number; y: number };
  active: boolean;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  pointerRef: React.RefObject<HTMLDivElement | null>;
};

const MouseTrackerContext = React.createContext<
  MouseTrackerContextType | undefined
>(undefined);

export const useMouseTracker = (): MouseTrackerContextType => {
  const context = React.useContext(MouseTrackerContext);
  if (!context) {
    throw new Error("useMouseTracker must be used within MouseTrackerProvider");
  }
  return context;
};

export { MouseTrackerContext };
