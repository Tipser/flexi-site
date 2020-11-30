import React, { FC, useCallback, useState } from 'react';
import { Cart } from '@tipser/tipser-elements/dist/all';
import { NavLink, useHistory } from 'react-router-dom';
import SearchField from 'react-search-field';

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
        <NavLink className="header-logo" activeClassName="header-logo-active" to="/">
          <h1>Flexi-site</h1>
        </NavLink>
      </div>
      <div>
        <div className="second-row">
          <div className="second-row-left-container">
            <div className="menu-button second-row-element" onClick={onShowDrawer}>
              Menu button
            </div>
          </div>
          <div className="second-row-right-container">
            <SearchField
              placeholder="Search for products"
              onChange={setQuery}
              onEnter={searchConfirmed}
              onSearchClick={searchConfirmed}
            />
            <div className="second-row-element cart-container">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
