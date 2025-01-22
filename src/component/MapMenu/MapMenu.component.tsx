import React from 'react';
import { useMap } from 'react-leaflet';

export const MapMenu: React.FC<{ setTileLayer: (url: string) => void }> = ({ setTileLayer }) => {
    const map = useMap();

    const handleZoomIn = () => map.zoomIn();
    const handleZoomOut = () => map.zoomOut();

    const handleThemeChange = (theme: string) => {
        const baseUrl = 'https://tiles.stadiamaps.com/tiles/';
        const themeUrls: { [key: string]: string } = {
            normal: `https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png`,
            light: `${baseUrl}stamen_toner_lite/{z}/{x}/{y}{r}.png`,
            dark: `${baseUrl}stamen_toner/{z}/{x}/{y}{r}.png`,
            minimal: `${baseUrl}stamen_toner_background/{z}/{x}/{y}{r}.png`,
        };
        setTileLayer(themeUrls[theme]);
    };

    const buttons = [
        {
            click: () => handleThemeChange('normal'),
            text: 'Normal',
        },
        {
            click: () => handleThemeChange('light'),
            text: 'Light',
        },
        {
            click: () => handleThemeChange('dark'),
            text: 'Dark',
        },
        {
            click: () => handleThemeChange('minimal'),
            text: 'Minimal',
        },
        {
            click: handleZoomIn,
            text: '+',
        },
        {
            click: handleZoomOut,
            text: '-',
        },
    ]



    return (
        <div style={styles.footerMenu}>
            {buttons.map((button, index) => (
                <button key={index} onClick={button.click}>
                    {button.text}
                </button>
            ))}
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

