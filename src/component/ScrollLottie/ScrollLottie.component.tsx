import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './ScrollLottie.scss';
const ScrollLottie: React.FC = () => {
    return (
        <Player src='/lottie/scroll.json' className='scroll-lottie'/>
  );
}

export default ScrollLottie;