import { useApp } from '../../../../../../context';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './EnterButton.scss'

export const EnterButton: React.FC = () => {
    const { setShowLandingPage } = useApp()
    const { t } = useTranslation();

    return (
        <button
            className='button'
            onClick={
                () => setShowLandingPage(false)
            }
        >
            {t('start')}
        </button>
    );
}
