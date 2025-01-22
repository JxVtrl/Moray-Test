import React from 'react';
import './Logo.scss';  // Importação do arquivo de estilos

export const Logo: React.FC = () => {
  return (
    <div className="map-logo">
      <img src='/brand/moray_black.png' alt='Moray.AI' />
    </div>
  );
};
