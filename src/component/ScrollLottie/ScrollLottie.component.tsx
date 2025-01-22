import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import './ScrollLottie.scss';
import { MouseScrollWheel } from '../../component/svg-components/MouseScrollWheel/MouseScrollWheel.component';
export const ScrollSvg: React.FC = () => {
  return (
    <div style={{
        height: '35px',  
      marginTop: '15vh',
        marginBottom: '25vh',

      }}>
      
        <MouseScrollWheel/>
      </div>
  );
}

export const ScrollLottie: React.FC = () => {
  return (
    <div className='scroll_lottie'>
      <Player
        autoplay
        loop
        src="/lottie/scroll.json"
        style={{ height: '100%', width: '100%' }}
      />
    </div>
  );
}
