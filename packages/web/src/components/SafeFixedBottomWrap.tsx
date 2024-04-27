import React from "react";

interface SafeFixedBottomWrapProps {
  children: React.ReactNode;
}
export const SafeFixedBottomWrap = ({ children }: SafeFixedBottomWrapProps) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [height, setHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    if (ref.current) {
      const { height } = ref.current.getBoundingClientRect();
      setHeight(height);
    }
  }, [ref.current]);

  return (
    <>
      <div style={{ height: height }} />
      <div
        ref={ref}
        className="absolute bottom-0 left-0 z-50 w-full pb-[env(safe-area-inset-bottom)]"
      >
        {children}
      </div>
    </>
  );
};
