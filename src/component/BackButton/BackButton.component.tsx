import { BaselineArrowBack } from '../../component';
import React from 'react';
import './BackButton.scss';
import { useApp } from '../../context';

export const BackButton: React.FC = () => {
  const {setShowLandingPage} =useApp()
  return <button onClick={()=>setShowLandingPage(true)} className='back_button' ><BaselineArrowBack/></button>;
}
