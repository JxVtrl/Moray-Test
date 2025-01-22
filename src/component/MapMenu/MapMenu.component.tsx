import React from 'react';
import { useMap } from 'react-leaflet';
import './MapMenu.scss';

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
            type: 'variant'
        },
        {
            click: () => handleThemeChange('light'),
            text: 'Light',
            type: 'variant'

        },
        {
            click: () => handleThemeChange('dark'),
            text: 'Dark',
            type: 'variant'

        },
        {
            click: () => handleThemeChange('minimal'),
            text: 'Minimal',
            type: 'variant'

        },
        {
            click: handleZoomIn,
            text: '+',
            type: 'zoom'
        },
        {
            click: handleZoomOut,
            text: '-',
            type: 'zoom'
        },
    ]



    return (
        <div className='map_menu'>
            <h1>Map Menu</h1>

            <div className='map_menu_buttons'>

                {buttons.filter(
                    button => button.type === 'variant'
                ).map((button, index) => (
                    <button key={index} onClick={button.click}>
                        {button.text}
                    </button>
                ))}

                <div className='zoom_buttons'>

                    {buttons.filter(
                        button => button.type === 'zoom'
                    ).map((button, index) => (
                        <button key={index} onClick={button.click}>
                            {button.text}
                        </button>
                    ))}
                </div>
                
                
            </div>
        </div>
    );
};

