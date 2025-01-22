import React from 'react';
import { motion } from 'framer-motion';
import './LoadingScreen.scss';
import LogoWall from '../../blocks/Components/LogoWall/LogoWall';

const logoImgs = [
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
  { imgUrl: '/brand/moray_black.png', altText: 'Moray.AI Logo' },
];

export const LoadingPage: React.FC = () => {
  return (
    <motion.div
      className="loading-screen"
        initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '100%' }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="logo-wall-container">
        <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
              />
              <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
              />
              <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
              />
              <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
              />
              <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
              />
              <LogoWall
          items={logoImgs}
          direction="horizontal"
          pauseOnHover={true}
          size="clamp(8rem, 1rem + 20vmin, 25rem)"
          duration="60s"
        />
      </div>

     
    </motion.div>
  );
};
