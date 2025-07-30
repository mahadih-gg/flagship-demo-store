import { clsx, type ClassValue } from "clsx";
import { type HTMLMotionProps } from "motion/react";
import * as React from "react";
import { twMerge } from "tailwind-merge";

export function cx(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export type MouseTrackerContextType = {
  position: { x: number; y: number };
  active: boolean;
  wrapperRef: React.RefObject<HTMLDivElement | null>;
  pointerRef: React.RefObject<HTMLDivElement | null>;
};

export const MouseTrackerContext = React.createContext<
  MouseTrackerContextType | undefined
>(undefined);

export const useMouseTracker = (): MouseTrackerContextType => {
  const context = React.useContext(MouseTrackerContext);
  if (!context) {
    throw new Error("useMouseTracker must be used within MouseTrackerProvider");
  }
  return context;
};

export type MouseTrackerProviderProps = React.ComponentProps<"div"> & {
  children: React.ReactNode;
};

export type PointerProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
};

export type Anchor =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "left"
  | "right"
  | "center";

export type PointerFollowerProps = HTMLMotionProps<"div"> & {
  align?: Anchor;
  gap?: number;
  transition?: { stiffness: number; damping: number; bounce: number };
  children: React.ReactNode;
}; 