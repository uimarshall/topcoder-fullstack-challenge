/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../actions/productActions';
import Banner from './Banner';
import LandingText from './LandingText';
import Navbar from './Navbar';
import ProductDisplay from './ProductDisplay';
import SectionBgImage from '../SectionBgImage';

import MetaData from './layout/MetaData';
import ExclusiveDeals from './ExclusiveDeals';
import NewArrivals from './NewArrivals';
import ShopByCat from './ShopByCat';
import Collections from './Collections';
import BestSellers from './BestSellers';
import Varieties from './Varieties';
import FashionForYou from './FashionForYou';
import TrendingNow from './TrendingNow';
import Outlets from './Outlets';

const Home = () => {
  const dispatch = useDispatch();
  // Map redux state to props of Home component
  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <div>
      <MetaData title={'Buy affordable and quality products online'} />
      <main className="main" id="top">
        <Navbar />
        <section className="py-11 bg-light-gradient border-bottom border-white border-5">
          {/* Section Bg Image */}
          <SectionBgImage />
          {/* Landing Text */}
          <LandingText />
        </section>
        {/* Banner */}
        <Banner />

        {/* Product Display */}
        <ProductDisplay />
        {/* Exclusive Deals */}
        <ExclusiveDeals />
        {/* New Arrivals */}
        <NewArrivals />

        {/* Shop by category */}
        <ShopByCat />

        {/* Collections */}
        <Collections />
        {/* Best sellers */}
        <BestSellers />
        {/* Varieties */}
        <Varieties />

        {/* Fashion for you */}
        <FashionForYou />
        {/* Trending */}
        <TrendingNow />

        {/* Outlets */}

        <Outlets />
      </main>
    </div>
  );
};

export default Home;
