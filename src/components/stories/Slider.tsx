import React, { useEffect, useState, useRef } from "react";

interface SliderOptions {
  idealElWidth: number;
  autoFit: boolean;
}

interface SliderProps {
  children: React.ReactNode;
  visibleElements: number;
  height: number;
  gap: number;
  options?: SliderOptions;
}

export default function Slider({
  children,
  visibleElements,
  height,
  gap,
  options,
}: SliderProps) {
  const storiesRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      if (storiesRef.current !== null) {
        setContainerWidth(storiesRef.current.offsetWidth);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const howManyCanFit = (): number => {
    if (options?.autoFit === true) {
      return Math.floor(containerWidth / options.idealElWidth);
    }
    return visibleElements;
  };

  return (
    <div className="stories" ref={storiesRef} style={{ height: `${height}px` }}>
      <div
        className="slider"
        style={{
          gridTemplateColumns: `repeat(${howManyCanFit()}, ${
            (containerWidth - gap * (howManyCanFit() - 1)) / howManyCanFit()
          }px)`,
          gap: gap,
        }}
      >
        {children}
      </div>
    </div>
  );
}
