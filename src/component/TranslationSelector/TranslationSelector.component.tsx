import React from 'react';
import { useTranslation } from 'react-i18next';

const TranslationSelector: React.FC = () => {
    const { i18n } = useTranslation();
    return <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
        <option value="en">English</option>
        <option value="pt">Português</option>
    </select>;
}

export default TranslationSelector;