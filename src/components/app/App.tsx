import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { TipserElementsProvider, TipserEnv, TipserLang, Cart, Page, Collection, ProductContext, Checkout } from '@tipser/tipser-elements/dist/all';
import './App.scss';
import '@tipser/tipser-elements/dist/index.css';
import { useParams } from 'react-router';

//TODO: export this typing from TE library

const CONTENTFUL_PAGE_ID = '45AiTC5HiNHzPsiWEbu2NK';
const POS_ID = '5f738fdd023072000132ae3b';

const tipserConfig = {
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
  contentfulApiKey: 'RTiOcJ_L-KizTMuQXMPtc6FeekTSfg7cLWYCTdVdOJQ',
  contentfulSpace: '6q7jkzyrpea6',
};

const MainPage = () => (
  <div className="te-site">
    <div className="main-container">
      <div className="top-bar">
        <div className="first-row">
          <h1>Boutique douze</h1>
        </div>
        <div>
          <div className="second-row">
            <div className="second-row-left-container">
              <div className="menu-button second-row-element">Menu button</div>
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
      <div className="content">
        <Page id={CONTENTFUL_PAGE_ID} />
        <Collection id="2ZoLS24ezM9ITihWamUV32" />
      </div>
    </div>
    <footer className="footer">
      <div className="footer-inner-container">
      <h2>Footer</h2>
      <div className="footer-links-container">
        <div className="footer-link" >
          <a href="#">Terms</a>
        </div>
        <div className="footer-link" >
          <a href="#">Privacy Notice</a>
        </div>
        <div className="footer-link" >
          <a href="#">Cookies</a>
        </div>
      </div>
      </div>
    </footer>
  </div>
);

const ProductPage = () => {
  const { productId } = useParams();
  return (<div className="te-site">
    <div className="main-container">
      <div className="top-bar">
        <div className="first-row">
          <h1>Boutique douze</h1>
        </div>
        <div>
          <div className="second-row">
            <div className="second-row-left-container">
              <div className="menu-button second-row-element">Menu button</div>
            </div>
            <div className="second-row-right-container">
              <input className="second-row-element search-input"/>
              <div className="second-row-element cart-container">
                <Cart/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <ProductContext productId={productId as any}></ProductContext>
      </div>
    </div>
    <footer className="footer">
      <div className="footer-inner-container">
        <h2>Footer</h2>
        <div className="footer-links-container">
          <div className="footer-link">
            <a href="#">Terms</a>
          </div>
          <div className="footer-link">
            <a href="#">Privacy Notice</a>
          </div>
          <div className="footer-link">
            <a href="#">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
)
};

const CollectionPage = () => {
  const { collectionId } = useParams();
  return (<div className="te-site">
      <div className="main-container">
        <div className="top-bar">
          <div className="first-row">
            <h1>Boutique douze</h1>
          </div>
          <div>
            <div className="second-row">
              <div className="second-row-left-container">
                <div className="menu-button second-row-element">Menu button</div>
              </div>
              <div className="second-row-right-container">
                <input className="second-row-element search-input"/>
                <div className="second-row-element cart-container">
                  <Cart/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <Collection collectionId={collectionId}></Collection>
        </div>
      </div>
      <footer className="footer">
        <div className="footer-inner-container">
          <h2>Footer</h2>
          <div className="footer-links-container">
            <div className="footer-link">
              <a href="#">Terms</a>
            </div>
            <div className="footer-link">
              <a href="#">Privacy Notice</a>
            </div>
            <div className="footer-link">
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
};

const CheckoutPage = () => {
  return (<div className="te-site">
      <div className="main-container">
        <div className="top-bar">
          <div className="first-row">
            <h1>Boutique douze</h1>
          </div>
          <div>
            <div className="second-row">
              <div className="second-row-left-container">
                <div className="menu-button second-row-element">Menu button</div>
              </div>
              <div className="second-row-right-container">
                <input className="second-row-element search-input"/>
                <div className="second-row-element cart-container">
                  <Cart/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content">
          <Checkout />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-inner-container">
          <h2>Footer</h2>
          <div className="footer-links-container">
            <div className="footer-link">
              <a href="#">Terms</a>
            </div>
            <div className="footer-link">
              <a href="#">Privacy Notice</a>
            </div>
            <div className="footer-link">
              <a href="#">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
};

class App extends React.Component {
  render() {
    return (
      <TipserElementsProvider posId={POS_ID} config={tipserConfig} isSentryEnabled={false}>
        <Router>
          <Switch>
            <Route exact path="/">
              <MainPage />
            </Route>
            <Route exact path="/product/:productId">
              <ProductPage />
            </Route>
            <Route exact path="/store/:collectionId">
              <CollectionPage />
            </Route>
            <Route path="/checkout">
              <CheckoutPage />
            </Route>
            <Route path="/checkout-confirmation">
              <CheckoutPage />
            </Route>
          </Switch>
        </Router>
      </TipserElementsProvider>
    );
  }
}

export default App;
