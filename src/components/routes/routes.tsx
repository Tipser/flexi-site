import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useHistory, useParams } from 'react-router';

import {
  RootPage,
  Collection,
  ProductContext,
  Checkout,
  PageBySlug,
  DynamicCollection,
} from '@tipser/tipser-elements/dist/all';

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

  const history = useHistory();
  const redirectTo404 = () => {
    history.push('/404');
  };

  return (
    <>
      <PageBySlug slug={slug} onPageNotFound={redirectTo404}></PageBySlug>
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

const SearchPage = () => {
  const { query } = useParams<{ query: string }>();
  const search = {
    query,
    market: 'se',
    maxResults: 15,
  };

  return (
    <>
      <DynamicCollection search={search}></DynamicCollection>
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
    <Route exact path="/search/:query">
      <SearchPage />
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
