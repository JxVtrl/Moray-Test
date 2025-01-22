/*
	jsrepo 1.28.2
	Installed from https://reactbits.dev/default/
	22-01-2025
*/

import { useRef } from 'react';
import './SpotlightCard.scss';

const SpotlightCard = ({
  children,
  className = '',
  spotlightColor = 'rgba(255, 255, 255, 0.25)',
}: {
  children: React.ReactNode;
  className?: string;
  spotlightColor?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  interface MouseMoveEvent extends React.MouseEvent<HTMLDivElement, MouseEvent> {}

  const handleMouseMove = (e: MouseMoveEvent) => {
    if (divRef.current) {
      const rect = divRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      divRef.current.style.setProperty('--mouse-x', `${x}px`);
      divRef.current.style.setProperty('--mouse-y', `${y}px`);
      divRef.current.style.setProperty('--spotlight-color', spotlightColor);
    }
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      className={`card-spotlight ${className}`}
    >
      {children}
    </div>
  );
};

export default SpotlightCard;
