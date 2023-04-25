import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  useMemo,
} from "react";

interface SliderOptions {
  idealElWidth: number;
  autoFit: boolean;
  maxVisibleEl?: number;
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

  useLayoutEffect(() => {
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

  const getColumnSize = useMemo(() => {
    const howManyCanFit = (): number => {
      if (options?.autoFit === true) {
        let canFitNum = Math.floor(containerWidth / options.idealElWidth);

        if (
          options?.maxVisibleEl !== undefined &&
          canFitNum > options.maxVisibleEl
        ) {
          canFitNum = options.maxVisibleEl;
        }
        return canFitNum;
      }
      return visibleElements;
    };

    return (containerWidth - gap * (howManyCanFit() - 1)) / howManyCanFit();
  }, [
    containerWidth,
    gap,
    visibleElements,
    options?.autoFit,
    options?.idealElWidth,
    options?.maxVisibleEl,
  ]);

  const initialX = useRef(0);
  const isDragging = useRef(false);
  const isClicked = useRef(false);
  const [currPos, setCurrPos] = useState(0);
  const [prevPos, setPrevPos] = useState(0);
  const smooth = useRef(false);
  const direction = useRef<"none-right" | "none-left" | "right" | "left" | "">(
    ""
  );
  const maxRight = 0;
  const maxLeft =
    (React.Children.count(children) * getColumnSize +
      (gap - 1) * React.Children.count(children) -
      (storiesRef.current?.offsetWidth ?? 0)) *
    -1;

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    initialX.current = e.clientX;
    isClicked.current = true;
    smooth.current = false;
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    initialX.current = e.touches[0].clientX;
    isClicked.current = true;
    smooth.current = false;
  };

  useEffect(() => {
    function handleMouseMove(e: MouseEvent | TouchEvent) {
      if (!isClicked.current || storiesRef.current === null) return;
      // dsa
      const clientX =
        e instanceof TouchEvent ? e.touches[0].clientX : e.clientX;
      const delta = clientX - initialX.current;

      if (Math.abs(delta) > 10) {
        isDragging.current = true;
        const newPos = prevPos + delta;

        if (newPos >= maxRight) {
          const weight = Math.exp(-(newPos - maxRight) / 200) * 0.5 + 0.5;
          setCurrPos(prevPos + delta * weight);
          direction.current = "none-right";
        } else if (newPos <= maxLeft) {
          const weight = Math.exp((newPos - maxLeft) / 200) * 0.5 + 0.5;
          setCurrPos(prevPos + delta * weight);
          direction.current = "none-left";
        } else {
          direction.current = delta > 0 ? "right" : "left";
          setCurrPos(newPos);
        }
      }
    }

    document.addEventListener("touchmove", handleMouseMove);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchmove", handleMouseMove);
    };
  }, [prevPos]);

  useEffect(() => {
    function handleMouseUp() {
      if (isClicked.current) {
        document.removeEventListener("mouseup", handleMouseUp);
        document.removeEventListener("touchend", handleMouseUp);
        isClicked.current = false;
        isDragging.current = false;

        const columnSize = getColumnSize + gap;
        const decimal = Math.abs((currPos / columnSize) % 1);
        const numColumns = Math.round(currPos / columnSize);

        let nearestPos;
        if (direction.current === "none-right") {
          nearestPos = maxRight;
        } else if (direction.current === "none-left") {
          nearestPos = maxLeft;
        } else if (decimal > 0.2 && decimal < 0.8) {
          nearestPos =
            direction.current === "right"
              ? Math.ceil(currPos / columnSize) * columnSize
              : Math.floor(currPos / columnSize) * columnSize;
        } else {
          nearestPos = numColumns * columnSize;
        }

        setPrevPos(nearestPos);
        setCurrPos(nearestPos);

        smooth.current = true;
      }
    }
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("touchend", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleMouseUp);
    };
  }, [currPos]);

  return (
    <div className="stories" ref={storiesRef} style={{ height: `${height}px` }}>
      <div
        className="slider"
        style={{
          gridAutoColumns: `${getColumnSize}px`,
          gap,
          transform: `translateX(${currPos}px)`,
          transition: smooth.current ? "500ms" : "0ms",
          cursor: isDragging.current ? "grabbing" : "pointer",
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        {children}
      </div>
    </div>
  );
}
