import React from 'react';
import { Logo3D } from '../../component';
import { Texts } from './components';
import './LandingPage.scss'
import { Footer } from '../../sections';
import ScrollLottie from '../../component/ScrollLottie/ScrollLottie.component';

export const LandingPage: React.FC = () => {
  return (
    <div className='landing_container'>
      <Texts />
      <ScrollLottie/>
      <Footer />
    </div>
  );
};

