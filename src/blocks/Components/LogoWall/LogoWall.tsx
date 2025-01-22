/*
  jsrepo 1.28.2
  Installed from https://reactbits.dev/default/
  22-01-2025
*/

import { useState, CSSProperties } from 'react';
import './LogoWall.scss';

interface LogoWallItem {
  imgUrl: string;
  altText: string;
}

interface LogoWallProps {
  items: LogoWallItem[];
  direction?: 'horizontal' | 'vertical';
  pauseOnHover?: boolean;
  size?: string;
  duration?: string;
  textColor?: string;
  bgColor?: string;
  bgAccentColor?: string;
}

function LogoWall({
  items = [],
  direction = 'horizontal',
  pauseOnHover = false,
  size = 'clamp(8rem, 1rem + 30vmin, 25rem)',
  duration = '60s',
  textColor = '#ffffff',
  bgColor = '#fff',
  bgAccentColor = '#fff',
}: LogoWallProps) {
  const [isPaused, setIsPaused] = useState(false);

  const wrapperClass = [
    'wrapper',
    direction === 'vertical' && 'wrapper--vertical',
  ]
    .filter(Boolean)
    .join(' ');

  const marqueeClass = [
    'marquee',
    direction === 'vertical' && 'marquee--vertical',
    isPaused && 'paused',
  ]
    .filter(Boolean)
    .join(' ');

  const customStyle: CSSProperties & {
    '--size': string;
    '--duration': string;
    '--color-text': string;
    '--color-bg': string;
    '--color-bg-accent': string;
  } = {
    '--size': size,
    '--duration': duration,
    '--color-text': textColor,
    '--color-bg': bgColor,
    '--color-bg-accent': bgAccentColor,
  };

  return (
    <article className={wrapperClass} style={customStyle}>
      <div
        className={marqueeClass}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="marquee__group">
          {items.map((item, idx) => (
            <img key={idx} src={item.imgUrl} alt={item.altText} />
          ))}
        </div>
        <div className="marquee__group" aria-hidden="true">
          {items.map((item, idx) => (
            <img key={`dup1-${idx}`} src={item.imgUrl} alt={item.altText} />
          ))}
        </div>
      </div>

      <div
        className={`${marqueeClass} marquee--reverse`}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        <div className="marquee__group">
          {items.map((item, idx) => (
            <img key={`rev-${idx}`} src={item.imgUrl} alt={item.altText} />
          ))}
        </div>
        <div className="marquee__group" aria-hidden="true">
          {items.map((item, idx) => (
            <img key={`dup2-${idx}`} src={item.imgUrl} alt={item.altText} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default LogoWall;
