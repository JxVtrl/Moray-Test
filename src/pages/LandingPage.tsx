import { useApp } from '../context';
import { Logo3D } from '../component';
import React from 'react';

export const LandingPage: React.FC = () => {
  const { setShowLandingPage } = useApp()
  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, height: '100vh' }}>
      <Logo3D />
      <h1 style={{ color: 'black' }}>Bem-vindo ao Teste Moray.Ai</h1>
      <p style={{ color: 'black', fontSize: '18px', maxWidth: '500px', margin: '0 auto' }}>
        Este teste tem como objetivo avaliar as habilidades em front-end. Clique abaixo para iniciar.
      </p>
      <button
        onClick={() => setShowLandingPage(true)}
        style={{
          padding: '15px 30px',
          fontSize: '18px',
          background: '#6c58ff',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Entrar no Teste
      </button>
    </div>
  );
};

