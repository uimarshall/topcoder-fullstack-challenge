/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
import Pagination from 'react-js-pagination';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
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
import MenuBar from './layout/MenuBar';

const { createSliderWithTooltip } = Slider;
const Range = createSliderWithTooltip(Slider.Range);

const Home = ({ match }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([1, 1000]);
  const [category, setCategory] = useState('');
  const [rating, setRating] = useState(0);
  const categories = [
    'Electronics',
    'Cameras',
    'Laptops',
    'Accessories',
    'Headphones',
    'Food',
    'Books',
    'Clothes/Shoes',
    'Beauty/Health',
    'Sports',
    'Home',
    'Outdoor',
    'Decorations',
  ];
  const dispatch = useDispatch();
  const alert = useAlert();
  // Map redux state to props of Home component
  const {
    loading,
    products,
    error,
    resPerPage,
    productsCount,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = match.params.keyword;

  useEffect(() => {
    if (error) {
      // alert.success('success');
      return alert.error(error);
    }
    dispatch(getProducts(currentPage, keyword, price, category, rating));
  }, [dispatch, alert, error, currentPage, keyword, price, category, rating]);

  function handlePageChangeNo(pageNumber) {
    setCurrentPage(pageNumber);
  }

  let count = productsCount;
  if (keyword) {
    count = filteredProductsCount;
  }
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          {' '}
          <MetaData title={'Buy affordable and quality products online'} />
          <main className="main" id="top">
            {/* <Navbar /> */}
            {/* <MenuBar /> */}
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
                    <div className="row h-100 align-items-center g-2">
                      {keyword ? (
                        <>
                          <div className="col-6 col-md-3 mt-5 mb-5">
                            <div className="px-5">
                              <Range
                                marks={{
                                  1: `$1`,
                                  1000: `$1000`,
                                }}
                                min={1}
                                max={1000}
                                defaultValue={[1, 1000]}
                                tipFormatter={(value) => `$${value}`}
                                tipProps={{
                                  placement: 'top',
                                  visible: true,
                                }}
                                value={price}
                                onChange={(price) => setPrice(price)}
                              />

                              <hr className="my-5" />

                              <div className="mt-5">
                                <h4 className="mb-3">Categories</h4>

                                <ul className="pl-0">
                                  {categories.map((category) => (
                                    <li
                                      style={{
                                        cursor: 'pointer',
                                        listStyleType: 'none',
                                      }}
                                      key={category}
                                      onClick={() => setCategory(category)}
                                    >
                                      {category}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              {/* Ratings filtering */}
                              <hr className="my-3" />

                              <div className="mt-5">
                                <h4 className="mb-3">Ratings</h4>

                                <ul className="pl-0">
                                  {[5, 4, 3, 2, 1].map((star) => (
                                    <li
                                      style={{
                                        cursor: 'pointer',
                                        listStyleType: 'none',
                                      }}
                                      key={star}
                                      onClick={() => setRating(star)}
                                    >
                                      <div className="rating-outer">
                                        <div
                                          className="rating-inner"
                                          style={{
                                            width: `${star * 20}%`,
                                          }}
                                        ></div>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="col-6 col-md-9">
                            <div className="row">
                              {products.map((product) => (
                                <ProductDisplay
                                  key={product._id}
                                  product={product}
                                  col={4}
                                />
                              ))}
                            </div>
                          </div>
                        </>
                      ) : (
                        products &&
                        products.map((product) => (
                          <ProductDisplay key={product._id} product={product} />
                        ))
                      )}
                    </div>
                  </div>
                  {/* View All */}
                  <ViewAll />
                </div>
              </div>
            </section>
            <div className="d-flex justify-content-center mt-5">
              {resPerPage <= count && (
                <Pagination
                  activePage={currentPage} //current page where the user is.
                  itemsCountPerPage={resPerPage}
                  totalItemsCount={productsCount}
                  // pageRangeDisplayed={5}
                  onChange={handlePageChangeNo}
                  nextPageText={'Next'}
                  prevPageText={'Prev'}
                  firstPageText={'First'}
                  lastPageText={'Last'}
                  itemClass="page-item" //bs classes
                  linkClass="page-link"
                />
              )}
            </div>

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
