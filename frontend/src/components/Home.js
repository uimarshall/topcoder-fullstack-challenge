/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import { getProducts } from '../actions/productActions';

import ProductHeader from './ProductHeader';
import ViewAll from './ViewAll';

import Banner from './Banner';
import LandingText from './LandingText';
import Navbar from './Navbar';
import ProductDisplay from './products/ProductDisplay';
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
import Loader from './shared/Loader';

const Home = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  // Map redux state to props of Home component
  const { loading, products, error, productsCount } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    if (error) {
      // alert.success('success');
      return alert.error(error);
    }
    dispatch(getProducts());
  }, [dispatch, alert, error]);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {' '}
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
            <section className="py-0">
              <div className="container">
                <div className="row h-100">
                  {/* Header */}
                  <ProductHeader title="popular deals" />

                  <div className="col-12">
                    <div
                      className="carousel slide"
                      id="carouselBestDeals"
                      data-bs-touch="false"
                      data-bs-interval="false"
                    >
                      <div className="carousel-inner">
                        <div
                          className="carousel-item active"
                          data-bs-interval="10000"
                        >
                          <div className="row h-100 align-items-center g-2">
                            {products &&
                              products.map((product) => (
                                <ProductDisplay
                                  key={product._id}
                                  product={product}
                                />
                              ))}
                          </div>
                        </div>

                        <div className="row">
                          <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselBestDeals"
                            data-bs-slide="prev"
                          >
                            <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Previous</span>
                          </button>
                          <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselBestDeals"
                            data-bs-slide="next"
                          >
                            <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                            ></span>
                            <span className="visually-hidden">Next </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* View All */}
                  <ViewAll />
                </div>
              </div>
            </section>

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
        </>
      )}
    </div>
  );
};

export default Home;
