import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useToast } from '../../context';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './EvolutionChart.scss'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const EvolutionChart: React.FC = () => {
  const { clickedArea, setClickedArea } = useToast();

  if (!clickedArea || clickedArea.properties.populacao.length === 0) return null;

  const data = {
    labels: clickedArea.properties.populacao.map((item) => item.ano),
    datasets: [
      {
        label: 'População',
        data: clickedArea.properties.populacao.map((item) => item.populacao),
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
          color: 'white',
        },
      },
      y: {
        beginAtZero: true,
        ticks: {
          color: 'white',
        },
      },
    },
  };

  return (
    <div
      className='evolution_chart_container'
    >
      <button
        className='close_button'
        onClick={() => setClickedArea(null)}
      >
        X
      </button>
      <h2 className='evolution_chart_title' >Evolução Populacional
        <br />
        <span className='evolution_chart_subtitle' >
          {clickedArea?.properties.name || 'Região Desconhecida'}
        </span>

      </h2>
      <Bar data={data} options={options} width={300} height={300} />
    </div>
  );
};

