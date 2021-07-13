import React, { useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'react-bootstrap';

import { getProductDetails, clearErrors } from '../../actions/productActions';
import { addItemToCart } from '../../actions/cartActions';
import MetaData from '../layout/MetaData';
import Loader from '../shared/Loader';

const ProductDetails = ({ match }) => {
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const dispatch = useDispatch();
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );
  const alert = useAlert();
  useEffect(() => {
    dispatch(getProductDetails(match.params.id));
    if (error) {
      dispatch(clearErrors());
    }

    // if (reviewError) {
    //   alert.error(reviewError);
    //   dispatch(clearErrors());
    // }

    // if (success) {
    //   alert.success('Review posted successfully');
    //   dispatch({ type: NEW_REVIEW_RESET });
    // }
  }, [dispatch, alert, error, match.params.id]);

  const addToCart = () => {
    dispatch(addItemToCart(match.params.id, quantity));
    alert.success('Item Added to Cart');
  };

  const increaseQty = () => {
    const count = document.querySelector('.count');

    if (count.valueAsNumber >= product.stock) return;
    // If not, increase the quantity and update the state.
    const qty = count.valueAsNumber + 1;
    setQuantity(qty);
  };

  const decreaseQty = () => {
    const count = document.querySelector('.count');

    if (count.valueAsNumber <= 1) return;
    // If qty not less than 1, decreaseQty in the cart
    const qty = count.valueAsNumber - 1;
    setQuantity(qty);
  };

  function setUserRatings() {
    const stars = document.querySelectorAll('.star');

    stars.forEach((star, index) => {
      star.starValue = index + 1;

      ['click', 'mouseover', 'mouseout'].forEach(function (e) {
        star.addEventListener(e, showRatings);
      });
    });

    function showRatings(e) {
      stars.forEach((star, index) => {
        if (e.type === 'click') {
          if (index < this.starValue) {
            star.classList.add('orange');

            setRating(this.starValue);
          } else {
            star.classList.remove('orange');
          }
        }

        if (e.type === 'mouseover') {
          if (index < this.starValue) {
            star.classList.add('yellow');
          } else {
            star.classList.remove('yellow');
          }
        }

        if (e.type === 'mouseout') {
          star.classList.remove('yellow');
        }
      });
    }
  }

  // const reviewHandler = () => {
  //   const formData = new FormData();

  //   formData.set('rating', rating);
  //   formData.set('comment', comment);
  //   formData.set('productId', match.params.id);

  //   dispatch(newReview(formData));
  // };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <MetaData title={product.name} />
          <div class="container container-fluid">
            <div class="row f-flex justify-content-around">
              <div class="col-12 col-lg-5 img-fluid" id="product_image">
                <Carousel pause="hover">
                  {product.images &&
                    product.images.map((image) => (
                      <Carousel.Item key={image.public_id}>
                        <img
                          className="d-block w-100"
                          src={image.url}
                          alt={product.title}
                        />
                      </Carousel.Item>
                    ))}
                </Carousel>
              </div>

              <div class="col-12 col-lg-5 mt-5">
                <h3>{product.name}</h3>
                <p id="product_id">Product # {product._id}</p>

                <hr />

                <div class="rating-outer">
                  <div
                    class="rating-inner"
                    style={{
                      width: `${(product.ratings / 5) * 100}%`,
                    }}
                  ></div>
                </div>
                <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>

                <hr />

                <p id="product_price">{product.price}</p>
                <div class="stockCounter d-inline">
                  <span class="btn btn-danger minus" onClick={decreaseQty}>
                    -
                  </span>

                  <input
                    type="number"
                    class="form-control count d-inline"
                    value={quantity}
                    readOnly
                  />

                  <span class="btn btn-primary plus" onClick={increaseQty}>
                    +
                  </span>
                </div>
                <button
                  type="button"
                  id="cart_btn"
                  class="btn btn-primary d-inline ml-4"
                  disabled={product.stock === 0}
                >
                  Add to Cart
                </button>

                <hr />

                <p>
                  Status:{' '}
                  <span
                    id="stock_status"
                    className={product.stock > 0 ? 'greenColor' : 'redColor'}
                  >
                    {product.stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </span>
                </p>

                <hr />

                <h4 class="mt-2">Description:</h4>
                <p>{product.description}</p>
                <hr />
                <p id="product_seller mb-3">
                  Sold by: <strong>{product.seller}</strong>
                </p>

                <button
                  id="review_btn"
                  type="button"
                  class="btn btn-primary mt-4"
                  data-toggle="modal"
                  data-target="#ratingModal"
                >
                  Submit Your Review
                </button>

                <div class="row mt-2 mb-5">
                  <div class="rating w-50">
                    <div
                      class="modal fade"
                      id="ratingModal"
                      tabIndex="-1"
                      role="dialog"
                      aria-labelledby="ratingModalLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="ratingModalLabel">
                              Submit Review
                            </h5>
                            <button
                              type="button"
                              class="close"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                            <ul class="stars">
                              <li class="star">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="star">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="star">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="star">
                                <i class="fa fa-star"></i>
                              </li>
                              <li class="star">
                                <i class="fa fa-star"></i>
                              </li>
                            </ul>

                            <textarea
                              name="review"
                              id="review"
                              class="form-control mt-3"
                            ></textarea>

                            <button
                              class="btn my-3 float-right review-btn px-4 text-white"
                              data-dismiss="modal"
                              aria-label="Close"
                            >
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductDetails;
