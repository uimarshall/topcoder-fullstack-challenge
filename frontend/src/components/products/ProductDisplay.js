/* eslint-disable jsx-a11y/anchor-has-content */
import { Link } from 'react-router-dom';
const ProductDisplay = ({ product }) => {
  return (
    <>
      <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
        <div className="card card-span h-100 text-white">
          <img
            className="img-fluid h-100"
            src={product.images[0].url}
            alt="product"
          />
          {/* <img
            className="img-fluid h-100"
            src="assets/img/gallery/flat-hill.png"
            alt="product"
          /> */}
          <div className="card-img-overlay ps-0"> </div>
          <div className="card-body ps-0 bg-200">
            <h5 className="fw-bold text-1000 text-truncate">
              {/* Flat Hill Slingback */}

              <Link to={`/product/${product._id}`}>{product.name}</Link>
            </h5>
            <div className="fw-bold">
              <span className="text-600 me-2 text-decoration-line-through">
                $200
              </span>
              <span className="text-primary price">${product.price}</span>
            </div>
          </div>
          <div className="ratings mt-auto">
            <div className="rating-outer">
              <div
                className="rating-inner"
                style={{
                  width: `${(product.ratings / 5) * 100}%`,
                }}
              ></div>
            </div>
            <span id="no_of_reviews">({product.numOfReviews} Reviews)</span>
          </div>
          {/* <a className="stretched-link" href="!#"></a> */}
          <Link className="" to={`/product/${product._id}`}>
            View Details
          </Link>
        </div>
      </div>
    </>
  );
};

export default ProductDisplay;
