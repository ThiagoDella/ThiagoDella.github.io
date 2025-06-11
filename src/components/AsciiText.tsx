import { useRef, useEffect, useState } from 'react';
import AsciiArt from './AsciiArt.txt?raw';

export const AsciiText = (): ReactElement => {
  const containerRef = useRef<HTMLDivElement>(null);
  const preRef = useRef<HTMLPreElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const resize = () => {
      const containerWidth = containerRef.current?.offsetWidth || 1;
      const contentWidth = preRef.current?.scrollWidth || 1;

      const minScale = 0.3;
      const maxScale = 1;

      const newScale = Math.min(maxScale, Math.max(minScale, containerWidth / contentWidth));
      setScale(newScale);
    };

    resize(); // Initial call

    const resizeObserver = new ResizeObserver(resize);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="window__body__text--ascii" ref={containerRef}>
      <pre
        ref={preRef}
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'left',
          display: 'inline-block',
        }}
      >
        {AsciiArt}
      </pre>
    </div>
  );
};
