import React from 'react';
import { useTranslation } from 'react-i18next';
import './TranslationSelector.scss';

const TranslationSelector: React.FC = () => {
    const { i18n } = useTranslation();

    return (
        <div className="translation-selector">
            <select
                value={i18n.language}
                onChange={(e) => i18n.changeLanguage(e.target.value)}
            >
                <option value="en">🇺🇸 English</option>
                <option value="pt">🇧🇷 Português</option>
            </select>
        </div>
    );
};

export default TranslationSelector;
