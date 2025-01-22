import SpotlightCard from '../../blocks/Components/SpotlightCard/SpotlightCard';
import { useApp } from '../../context';
import React from 'react';
import './InstructionsModal.scss'
import DecryptedText from '../../blocks/TextAnimations/DecryptedText/DecryptedText';

const InstructionsModal: React.FC = () => {
    const { setShowInstructionsModal } = useApp()
    return (
        <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(0, 229, 255, 0.2)">
            <div className="instructions-content">
                <DecryptedText
                    text="Bem-vindo ao Mapa Interativo!"
                    speed={100}
                    maxIterations={20}
                    characters="ABCD1234!?"
                    className="h1"
                    parentClassName="h1"
                    encryptedClassName="h1"
                    animateOn='view'
                />

                <DecryptedText
                    text="Aqui você pode explorar diferentes regiões clicando nelas."
                    speed={150}
                    maxIterations={20}
                    characters="ABCD1234!?"
                    className="p"
                    parentClassName="p"
                    encryptedClassName="p"
                    animateOn='view'
                />

                <DecryptedText
                    text="Utilize os controles para navegar e clique nas áreas para visualizar informações detalhadas, como população e estatísticas demográficas."
                    speed={200}
                    maxIterations={20}
                    characters="ABCD1234!?"
                    className="p"
                    parentClassName="p"
                    encryptedClassName="p"
                    animateOn='view'
                
                />
            </div>
            <button
                className="custom-spotlight-button"
                onClick={() => setShowInstructionsModal(false)}>Fechar
            </button>
        </SpotlightCard>
    );
}

export default InstructionsModal;