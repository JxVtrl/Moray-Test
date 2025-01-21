import { useToast } from '../../context/ToastContext';
import React, { useEffect, useRef } from 'react';
import { Chart } from 'react-chartjs-2';
import styles from './Toast.module.scss';

export const Toast: React.FC = () => {
  const { clickedAreaPopulation } = useToast();
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (clickedAreaPopulation && audioRef.current) {
      audioRef.current.play();
    }
  }, [clickedAreaPopulation]);

  if (!clickedAreaPopulation) {
    return null;
  }

  const data = {
    labels: clickedAreaPopulation.map((item) => item.ano),
    datasets: [
      {
        label: 'População',
        data: clickedAreaPopulation.map((item) => item.populacao),
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        borderColor: 'rgba(255, 255, 255, 0.8)',
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          display: true,
          color: 'rgba(255, 255, 255, 0.2)',
        },
      },
    },
  };

  return (
    <>
      <audio ref={audioRef} src="/sounds/notification.mp3" />
      <div className={styles.toast_container}>
              <h2 className={styles.toast_title}>Evolução Populacional</h2>
        <Chart type="line" data={data} options={options} />
      </div>
    </>
  );
};
