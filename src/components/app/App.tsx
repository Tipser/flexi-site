import React from 'react';

import { TipserElementsProvider, TipserEnv, TipserLang } from '@tipser/tipser-elements/dist/all';

import Header from '../header';
import Footer from '../footer';
import Routes from '../routes';

import './App.scss';
import '@tipser/tipser-elements/dist/index.css';

const CONTENTFUL_API_KEY = 'RTiOcJ_L-KizTMuQXMPtc6FeekTSfg7cLWYCTdVdOJQ';
const CONTENTFUL_SPACE_ID = '6q7jkzyrpea6';

const POS_ID = '5f738fdd023072000132ae3b';

const tipserElementsConfig = {
  lang: TipserLang.enGB,
  env: TipserEnv.dev,
  openOldDialog: false,
  openOldCheckout: true,
  addToCartSettings: {
    directToCheckoutMode: false,
  },
  customUrls: {
    productUrl: '/product',
    checkoutUrl: '/checkout',
    checkoutConfirmationUrl: '/checkout-confirmation',
  },
  contentfulApiKey: CONTENTFUL_API_KEY,
  contentfulSpace: CONTENTFUL_SPACE_ID,
};

class App extends React.Component {
  render() {
    return (
      <TipserElementsProvider posId={POS_ID} config={tipserElementsConfig} isSentryEnabled={false}>
        <div className="te-site">
          <div className="main-container">
            <Header />

            <div className="content">
              <Routes />
            </div>

            <Footer />
          </div>
        </div>
      </TipserElementsProvider>
    );
  }
}

export default App;
