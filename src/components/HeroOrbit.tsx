import { PropsWithChildren } from "react";

export const HeroOrbit = ({ children, size }: PropsWithChildren<{ size: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div
        className="rounded-full border border-red-500 flex items-center justify-center"
        style={{ height: `${size}px`, width: `${size}px` }}
      >
        {children}
      </div>
    </div>
  );
};
