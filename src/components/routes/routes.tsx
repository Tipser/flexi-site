import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useParams } from 'react-router';

import { RootPage, Collection, ProductContext, Checkout, PageBySlug } from '@tipser/tipser-elements/dist/all';

const MainPage = () => (
  <>
    <RootPage />
  </>
);

const ProductPage = () => {
  const { productId } = useParams();
  return (
    <>
      <ProductContext productId={productId as any}></ProductContext>
    </>
  );
};

const CustomPage = () => {
  const { slug } = useParams();
  return (
    <>
      <PageBySlug slug={slug}></PageBySlug>
    </>
  );
};

const CollectionPage = () => {
  const { collectionId } = useParams();
  return (
    <>
      <Collection collectionId={collectionId}></Collection>
    </>
  );
};

const CheckoutPage = () => {
  return (
    <>
      <Checkout />
    </>
  );
};

const Routes = () => (
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
    <Route exact path="/c/:slug">
      <CustomPage />
    </Route>
    <Route path="/checkout">
      <CheckoutPage />
    </Route>
    <Route path="/checkout-confirmation">
      <CheckoutPage />
    </Route>
  </Switch>
);

export default Routes;
