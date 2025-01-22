import { useApp } from '../../../../context';
import React from 'react';
import './Texts.scss';
import { Logo3D } from '../../../../component';

export const Texts: React.FC = () => {
    const { setShowLandingPage } = useApp()
    return (
        <div className='texts_container'>
            <div className='logo_button_container'>
                <button
                    className='button'
                    onClick={
                        () => {
                            setShowLandingPage(false)
                            console.log('Entrou')
                        }
                    }
                >
                Entrar
                </button>
                <div className='logo_container_texts'>
                    <Logo3D/>
                </div>
            </div>


            <div className='texts_content'>
                <div className='texts'>
                    <h1 className='title'>
                        Bem-vindo ao Teste Moray.Ai
                    </h1>
                    <p className='description'>
                        Este teste tem como objetivo avaliar as habilidades em front-end. Clique acima para iniciar.
                    </p>
                </div>

                <div className='logo_container'>
                    <Logo3D />
                </div>
            </div>
        </div>
    );
}
