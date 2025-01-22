import { useApp } from '../../../../context';
import React from 'react';
import './Texts.scss';
import { Logo3D } from '../../../../component';
import { BlurText } from "../../../../blocks/TextAnimations/BlurText";
import TranslationSelector from '../../../../component/TranslationSelector/TranslationSelector.component';
import { useTranslation } from 'react-i18next';

export const Texts: React.FC = () => {
    const { setShowLandingPage } = useApp()
    const { t } = useTranslation();
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    }
    return (
        <div className='texts_container'>
            <div className='logo_button_container'>

                <button
                    className='button'
                    onClick={() => setShowLandingPage(false)}
                    >
                {t('start')}
                </button>
                    
                <div className='logo_container_texts'>
                    <Logo3D/>
                </div>

                <div>
                    <TranslationSelector />
                </div>
            </div>


            <div className='texts_content'>
                <div className='texts'>
                    <h1 className='title'>
                        <BlurText
                            text={t('welcome')}
                            delay={150}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                            className="text-2xl mb-8"
                            />
                        
                    </h1>
                    <p className='description'>
                        <BlurText
                            text={t('description')}
                            delay={250}
                            animateBy="words"
                            direction="top"
                            onAnimationComplete={handleAnimationComplete}
                        />
                    </p>
                </div>

                <div className='logo_container'>
                    <Logo3D />
                </div>
            </div>
        </div>
    );
}
