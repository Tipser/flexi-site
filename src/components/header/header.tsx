import React, { FC } from 'react';
import { Cart } from '@tipser/tipser-elements/dist/all';
import { NavLink } from 'react-router-dom';

import './header.scss';

type Props = {
  onShowDrawer?: () => void;
};

const Header: FC<Props> = ({onShowDrawer}) => (
  <div className="header">
    <div className="first-row">
        <NavLink className="header-logo" activeClassName="header-logo-active" to="/">
          <h1>Boutique douze</h1>
        </NavLink>
    </div>
    <div>
      <div className="second-row">
        <div className="second-row-left-container">
          <div className="menu-button second-row-element" onClick={onShowDrawer}>Menu button</div>
        </div>
        <div className="second-row-right-container">
          <input className="second-row-element search-input" />
          <div className="second-row-element cart-container">
            <Cart />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Header;
