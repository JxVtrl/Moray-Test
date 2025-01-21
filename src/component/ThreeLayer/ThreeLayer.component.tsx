import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useToast } from '../../context/ToastContext';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrando os componentes necessários do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ThreeLayer: React.FC = () => {
  const { clickedAreaPopulation, setClickedAreaPopulation } = useToast();

  if (!clickedAreaPopulation || clickedAreaPopulation.length === 0) return null;

  const data = {
    labels: clickedAreaPopulation.map((item) => item.ano),
    datasets: [
      {
        label: 'População',
        data: clickedAreaPopulation.map((item) => item.populacao),
        backgroundColor: 'rgba(54, 162, 235, 0.6)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 2,
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        titleColor: 'white',
        bodyColor: 'white',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: 'white', // Cor branca para os rótulos do eixo X
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white', // Cor branca para os rótulos do eixo Y
        },
      },
    },
  };

  return (
    <div
      style={{
        position: 'absolute',
        zIndex: 999,
        bottom: 25,
        right: '10%',
        width: '350px',
        height: '350px',
        background: 'rgba(0, 0, 0, 0.6)',
        backdropFilter: 'blur(10px)',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        style={{
          position: 'absolute',
          top: '10px',
          right: '20px',
          background: 'linear-gradient(to right, #ff4d4d, #ff0000)',
          border: 'none',
          color: 'white',
          fontSize: '20px',
          fontWeight: 'bold',
          padding: '8px 14px',
          borderRadius: '50%',
          cursor: 'pointer',
          boxShadow: '0 5px 15px rgba(255, 0, 0, 0.3)',
        }}
        onClick={() => setClickedAreaPopulation(null)}
      >
        X
      </button>
      <h2 style={{ color: 'white', marginBottom: '10px' }}>Evolução Populacional</h2>
      <Bar data={data} options={options} width={300} height={300} />
    </div>
  );
};

export default ThreeLayer;
