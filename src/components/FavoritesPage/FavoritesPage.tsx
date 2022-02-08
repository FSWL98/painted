import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';

import './FavoritesPage.scss';

const FavoritesPage = () => {
    return (
        <div className="FavoritesPage">
            <span>Сервис находится в разработке</span>
            <FontAwesomeIcon icon={faCog} spin size='3x' />
        </div>
    );
};

export default FavoritesPage;