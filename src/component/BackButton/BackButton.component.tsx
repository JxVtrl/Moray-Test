import { BaselineArrowBack } from '../../component';
import React from 'react';
import './BackButton.scss';
import { useApp } from '../../context';

export const BackButton: React.FC = () => {
  const {setShowLandingPage, setShowMap, setShowLoading} =useApp()
  return <button onClick={() => {
    setShowLandingPage(true)
    setShowMap(false)
    setShowLoading(false)
  }} className='back_button' ><BaselineArrowBack /></button>;
}
