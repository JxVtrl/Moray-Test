import React from 'react';
import './Texts.scss';
import { Logo, Logo3D } from '../../../../component';
import { BlurText } from "../../../../blocks/TextAnimations/BlurText";
import TranslationSelector from '../../../../component/TranslationSelector/TranslationSelector.component';
import { useTranslation } from 'react-i18next';
import { EnterButton } from './components';

export const Texts: React.FC = () => {
    const { t } = useTranslation();
    const handleAnimationComplete = () => {
        console.log('Animation completed!');
    }

    return (
        <div className='texts_container'>
            <div className='logo_button_container'>
                <EnterButton/>
                    
                <div className='logo_container_texts'>
                    <img src='/brand/moray_black.png' alt='Moray.AI' />
                </div>

                <TranslationSelector />
            </div>


            <div className='texts_content'>
                <div className='texts'>
                    <BlurText
                        text={t('welcome')}
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="title"
                    />
                        
                    <BlurText
                        text={t('description')}
                        delay={250}
                        animateBy="words"
                        direction="top"
                        className='description'
                        onAnimationComplete={handleAnimationComplete}
                    />
                </div>

                <EnterButton/>

                <div className='logo_container'>
                    <Logo3D />
                </div>
            </div>
        </div>
    );
}
