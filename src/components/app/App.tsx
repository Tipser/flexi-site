import React, { useState } from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import {
  TipserElementsProvider,
  TipserEnv,
  TipserLang,
  Site,
  MainMenu,
  TipserElementsConfigProp,
} from '@tipser/tipser-elements/dist/all';

import Header from '../header';
import Footer from '../footer';
import Routes from '../routes';
import Drawer from '../drawer';

import './App.scss';
import '@tipser/tipser-elements/dist/index.css';

const CONTENTFUL_API_KEY = 'RTiOcJ_L-KizTMuQXMPtc6FeekTSfg7cLWYCTdVdOJQ';
const CONTENTFUL_SPACE_ID = '6q7jkzyrpea6';

const POS_ID = '5f738fdd023072000132ae3b';
const SITE_ID = '2UnAzlUb10zqwGgXgIU8bD';

const history = createBrowserHistory();

type TipserElementsConfigWithCf = TipserElementsConfigProp & {
  contentfulApiKey: string;
  contentfulSpace: string;
};

const tipserElementsConfig: TipserElementsConfigWithCf = {
  lang: TipserLang.enGB,
  env: TipserEnv.dev,
  openOldDialog: false,
  cartIconDropdown: true,
  addToCartSettings: {
    directToCheckoutMode: false,
  },
  customUrls: {
    productBaseUrl: '/product',
    checkoutUrl: '/checkout',
    checkoutConfirmationUrl: '/checkout-confirmation',
  },
  contentfulApiKey: CONTENTFUL_API_KEY,
  contentfulSpace: CONTENTFUL_SPACE_ID,
};

const App = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <TipserElementsProvider posId={POS_ID} config={tipserElementsConfig}>
      <Site id={SITE_ID} />
      <Drawer
        header="My drawer"
        visible={drawerVisible}
        responsive={true}
        slideDirection="left"
        onClose={() => setDrawerVisible(false)}
      >
        <div className="menu-items">
          <MainMenu
            onClick={() => {
              setDrawerVisible(false);
            }}
          />
        </div>
      </Drawer>
      <Router history={history}>
        <div className="te-site">
          <div className="main-container">
            <Header onShowDrawer={() => setDrawerVisible(true)} />

            <div className="content">
              <Routes />
            </div>

            <Footer />
          </div>
        </div>
      </Router>
    </TipserElementsProvider>
  );
};

export default App;
