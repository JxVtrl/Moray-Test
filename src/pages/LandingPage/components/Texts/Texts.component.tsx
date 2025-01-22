import { useApp } from '../../../../context';
import React from 'react';
import './Texts.scss';

export const Texts: React.FC = () => {
    const { setShowLandingPage } = useApp()
    return (<div className='texts_container'>
        <button
            className='button'
            onClick={() => {
                setShowLandingPage(false)
                console.log('Entrou')
            }}
        >
            Entrar
        </button>
        <h1 className='title' >Bem-vindo ao Teste Moray.Ai</h1>
        <p className='description'>
            Este teste tem como objetivo avaliar as habilidades em front-end. Clique acima para iniciar.
        </p>
    </div>);
}
