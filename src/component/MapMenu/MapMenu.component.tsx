import React, { useState } from 'react';
import { useMap } from 'react-leaflet';

const MapMenu: React.FC<{ setTileLayer: (url: string) => void }> = ({ setTileLayer }) => {
    const map = useMap();

    const handleZoomIn = () => map.zoomIn();
    const handleZoomOut = () => map.zoomOut();

    const apiKey = '7980080c-94d2-48da-833b-88928603678a'; // Substitua pela sua chave de API

    const handleThemeChange = (theme: string) => {
        const baseUrl = 'https://tiles.stadiamaps.com/tiles/';
        const themeUrls: { [key: string]: string } = {
            normal: `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?api_key=${apiKey}`,
            light: `${baseUrl}stamen_toner_lite/{z}/{x}/{y}{r}.png?api_key=${apiKey}`,
            dark: `${baseUrl}stamen_toner/{z}/{x}/{y}{r}.png?api_key=${apiKey}`,
            minimal: `${baseUrl}stamen_toner_background/{z}/{x}/{y}{r}.png?api_key=${apiKey}`,
        };
        setTileLayer(themeUrls[theme]);
    };

    return (
        <div style={styles.footerMenu}>
            <button onClick={() => handleThemeChange('normal')}>Normal</button>
            <button onClick={() => handleThemeChange('light')}>Light</button>
            <button onClick={() => handleThemeChange('dark')}>Dark</button>
            <button onClick={() => handleThemeChange('minimal')}>Minimal</button>
            <button onClick={handleZoomIn}>+</button>
            <button onClick={handleZoomOut}>-</button>
        </div>
    );
};

import { CSSProperties } from 'react';

const styles: { footerMenu: CSSProperties } = {
    footerMenu: {
        position: 'absolute',
        bottom: '10px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: '10px',
        padding: '10px 20px',
        background: 'rgba(0, 0, 0, 0.8)',
        borderRadius: '12px',
        boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
        color: '#fff',
        zIndex: 1000,
    },
};

export default MapMenu;
