import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import './FavoritesPage.scss';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const FavoritesPage = () => {
    return (
        <div className="FavoritesPage">
            <span>Сервис находится в разработке</span>
            <FontAwesomeIcon icon={ faCog as IconProp } spin size='3x' />
        </div>
    );
};

export default FavoritesPage;