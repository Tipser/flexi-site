import React, { FC, useCallback, useState } from 'react';
import { Cart } from '@tipser/tipser-elements/dist/all';
import { NavLink, useHistory } from 'react-router-dom';
import SearchField from 'react-search-field';
import { ReactComponent as Logo } from '../../assets/images/flexisite.svg';
import { ReactComponent as Hamburger } from '../../assets/images/hamburger.svg';

import './header.scss';

type Props = {
  onShowDrawer?: () => void;
};

const Header: FC<Props> = ({ onShowDrawer }) => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  const searchConfirmed = useCallback(() => {
    if (query) {
      history.push(`/search/${query}`);
    }
  }, [query]);

  return (
    <div className="header">
      <div className="first-row">
        <div className="menu-button first-row-element" onClick={onShowDrawer}>
          <Hamburger className="hamburger-button"/>
        </div>
        <NavLink className="logo-container" activeClassName="header-logo-active" to="/">
          <Logo className="header-logo"/>
        </NavLink>
        <SearchField
          placeholder="Search for products"
          onChange={setQuery}
          onEnter={searchConfirmed}
          onSearchClick={searchConfirmed}
          className="search-field"
        />
        <Cart />
      </div>
      <div>
        <div className="second-row">
          <div className="second-row-left-container">
            <p>This is a demo site</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
