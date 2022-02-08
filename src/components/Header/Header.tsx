import React, { useCallback, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { debounce } from 'lodash';

import './Header.scss';
import { Link } from 'react-router-dom';
import { Dispatch } from '../../types/types';

const Header = ({ dispatch } : { dispatch: Dispatch }) => {

    const [search, setSearch] = useState('');

    const debouncedSearch = useCallback(
        debounce((value: string) => {
            handleSearch(value);
        }, 1000),
        [],
    );

    const handleSearch = (value: string) => {
        if (search)
            dispatch({
                type: 'reset_filters'
            });
        else dispatch({
                type: 'filter_name',
                searchQuery: value
            });
    };

    return (
        <header className="header">
            <div className="header_navigation">
                <img src={require('../../assets/logo.png')} alt='logo' />
                <Link to='/' className="header_link">Все уроки</Link>
                <Link to='/favorites' className="header_link">Избранное</Link>
            </div>
            <form className="header_search">
                <input
                    placeholder="Введите название урока"
                    value={search}
                    onChange={(ev: any) => {
                        setSearch(ev.target.value);
                        debouncedSearch(ev.target.value);
                    }}
                />
                <button type={"submit"}>
                    <FontAwesomeIcon icon='search'/>
                </button>
            </form>
        </header>
    )
};

export default Header;