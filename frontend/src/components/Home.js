import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';

import MetaData from './layout/MetaData';

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <MetaData title={'Buy affordable and quality products online'} />
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
