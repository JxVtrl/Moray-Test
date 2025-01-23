import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './TranslationSelector.scss';

const TranslationSelector: React.FC = () => {
    const { i18n } = useTranslation();
    const [selectedLang, setSelectedLang] = useState(i18n.language || 'pt');

    useEffect(() => {
        if (!localStorage.getItem('i18nextLng')) {
            i18n.changeLanguage('pt');
            setSelectedLang('pt');
        } else {
            setSelectedLang(i18n.language);
        }
    }, [i18n.language]);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newLang = e.target.value;
        i18n.changeLanguage(newLang);
        setSelectedLang(newLang);
    };

    return (
        <div className="translation-selector">
            <select value={selectedLang} onChange={handleChange}>
                <option value="en">🇺🇸 English</option>
                <option value="pt">🇧🇷 Português</option>
            </select>
        </div>
    );
};

export default TranslationSelector;
