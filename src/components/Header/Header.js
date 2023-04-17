import React from 'react';
import { useTranslation } from 'react-i18next';
import './Header.scss';

export const Header = () => {
    const { t } = useTranslation();
    return (
        <div className='header'>
            <h1>{t('forcastHeader')}</h1>
        </div>
    )
}
