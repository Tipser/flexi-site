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
  const { productId } = useParams<{ productId: string }>();
  return (
    <>
      <ProductContext productId={productId}></ProductContext>
    </>
  );
};

const CustomPage = () => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <PageBySlug slug={slug}></PageBySlug>
    </>
  );
};

const CollectionPage = () => {
  const { collectionId } = useParams<{ collectionId: string }>();
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
    <Route path="/checkout">
      <CheckoutPage />
    </Route>
    <Route path="/checkout-confirmation">
      <CheckoutPage />
    </Route>
    <Route exact path="/:slug">
      <CustomPage />
    </Route>
  </Switch>
);

export default Routes;
