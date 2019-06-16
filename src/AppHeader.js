import React from 'react';

import HeaderButton from './HeaderButton.js';

function AppHeader({sortingFunction}) {
    return (
        <div>
            <header className="ui menu">
                <nav className="ui container">
                    <div>
                        <a href="#" className="header item">
                        <img className="logo" src="https://typeofweb.com/wp-content/uploads/2017/08/cropped-typeofweb_logo-04-white-smaller-1-e1504359870362.png" />
                        Lista kontaktów
                        </a>
                    </div>
                    <HeaderButton content="Sortuj rosnąco" func={sortingFunction} funcParam="0" />
                    <HeaderButton content="Sortuj malejąco" func={sortingFunction} funcParam="1" />
                </nav>
            </header>
        </div>
    );
}

export default AppHeader;