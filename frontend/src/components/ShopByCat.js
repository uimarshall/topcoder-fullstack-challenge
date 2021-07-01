import React from 'react';

const ShopByCat = () => {
  return (
    <>
      <section id="categoryWomen">
        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mb-6">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm mb-3">
                Shop By Category
              </h5>
            </div>
            <div className="col-12">
              <nav>
                <div
                  className="nav nav-tabs majestic-tabs mb-4 justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-women-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-women"
                    type="button"
                    role="tab"
                    aria-controls="nav-women"
                    aria-selected="true"
                  >
                    For Women
                  </button>
                  <button
                    className="nav-link"
                    id="nav-men-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-men"
                    type="button"
                    role="tab"
                    aria-controls="nav-men"
                    aria-selected="false"
                  >
                    For Men
                  </button>
                </div>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-women"
                    role="tabpanel"
                    aria-labelledby="nav-women-tab"
                  >
                    <ul
                      className="nav nav-pills justify-content-center mb-5"
                      id="pills-tab-women"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-wtshirt-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-wtshirt"
                          type="button"
                          role="tab"
                          aria-controls="pills-wtshirt"
                          aria-selected="true"
                        >
                          T-Shirt
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-dresses-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-dresses"
                          type="button"
                          role="tab"
                          aria-controls="pills-dresses"
                          aria-selected="false"
                        >
                          Shirt
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-wshoes-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-wshoes"
                          type="button"
                          role="tab"
                          aria-controls="pills-wshoes"
                          aria-selected="false"
                        >
                          Shoes
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-wwatch-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-wwatch"
                          type="button"
                          role="tab"
                          aria-controls="pills-wwatch"
                          aria-selected="false"
                        >
                          Watch{' '}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-wsunglasses-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-wsunglasses"
                          type="button"
                          role="tab"
                          aria-controls="pills-wsunglasses"
                          aria-selected="false"
                        >
                          Sunglasses{' '}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-wbagpacks-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-wbagpacks"
                          type="button"
                          role="tab"
                          aria-controls="pills-wbagpacks"
                          aria-selected="false"
                        >
                          Bagpacks{' '}
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContentWomen">
                      <div
                        className="tab-pane fade"
                        id="pills-dresses"
                        role="tabpanel"
                        aria-labelledby="pills-dresses-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryDresses"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Gray Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Gray Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Gray Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Gray Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryDresses"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryDresses"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade show active"
                        id="pills-wtshirt"
                        role="tabpanel"
                        aria-labelledby="pills-wtshirt-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWTshirt"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/red-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Red T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/pink-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Pink T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/orange-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Orange T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/purple-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Purple T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/red-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Red T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/pink-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Pink T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/orange-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Orange T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/purple-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Purple T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/red-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Red T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/pink-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Pink T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/orange-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Orange T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/purple-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Purple T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/red-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Red T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/pink-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Pink T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/orange-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Orange T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/purple-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Purple T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWTshirt"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWTshirt"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-wshoes"
                        role="tabpanel"
                        aria-labelledby="pills-wshoes-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWShoes"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWShoes"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWShoes"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-wwatch"
                        role="tabpanel"
                        aria-labelledby="pills-wwatch-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWwatch"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWwatch"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWwatch"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-wsunglasses"
                        role="tabpanel"
                        aria-labelledby="pills-wsunglasses-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWSunglasses"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWSunglasses"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWSunglasses"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-wbagpacks"
                        role="tabpanel"
                        aria-labelledby="pills-wbagpacks-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWBagpacks"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-1.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-2.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-3.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-4.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWBagpacks"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWBagpacks"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-men"
                    role="tabpanel"
                    aria-labelledby="nav-men-tab"
                  >
                    <ul
                      className="nav nav-pills mb-5 justify-content-center"
                      id="pills-tab-men"
                      role="tablist"
                    >
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link active"
                          id="pills-tshirt-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-tshirt"
                          type="button"
                          role="tab"
                          aria-controls="pills-tshirt"
                          aria-selected="true"
                        >
                          T-Shirt
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-shirt-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-shirt"
                          type="button"
                          role="tab"
                          aria-controls="pills-shirt"
                          aria-selected="false"
                        >
                          Shirt
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-shoes-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-shoes"
                          type="button"
                          role="tab"
                          aria-controls="pills-shoes"
                          aria-selected="false"
                        >
                          Shoes
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-watch-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-watch"
                          type="button"
                          role="tab"
                          aria-controls="pills-watch"
                          aria-selected="false"
                        >
                          Watch{' '}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-sunglasses-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-sunglasses"
                          type="button"
                          role="tab"
                          aria-controls="pills-sunglasses"
                          aria-selected="false"
                        >
                          Sunglasses{' '}
                        </button>
                      </li>
                      <li className="nav-item" role="presentation">
                        <button
                          className="nav-link"
                          id="pills-bagpacks-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#pills-bagpacks"
                          type="button"
                          role="tab"
                          aria-controls="pills-bagpacks"
                          aria-selected="false"
                        >
                          Bagpacks{' '}
                        </button>
                      </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContentMen">
                      <div
                        className="tab-pane fade show active"
                        id="pills-tshirt"
                        role="tabpanel"
                        aria-labelledby="pills-tshirt-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryTshirt"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/white-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sky-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sky T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/yellow-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Yellow T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/black-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/white-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sky-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sky T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/yellow-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Yellow T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/black-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/white-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sky-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sky T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/yellow-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Yellow T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/black-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/white-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sky-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sky T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/yellow-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Yellow T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/black-tshirt.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black T-Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryTshirt"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryTshirt"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-shirt"
                        role="tabpanel"
                        aria-labelledby="pills-shirt-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryShirt"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Gray Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Gray Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Gray Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Gray Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        White Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shirt-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Black Shirt
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryShirt"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryShirt"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-shoes"
                        role="tabpanel"
                        aria-labelledby="pills-shoes-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryShoes"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $200
                                        </span>
                                        <span className="text-primary">
                                          $175
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/shoe-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Shoe
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryShoes"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryShoes"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-watch"
                        role="tabpanel"
                        aria-labelledby="pills-watch-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryWatch"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/watch-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Watch
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryWatch"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryWatch"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-sunglasses"
                        role="tabpanel"
                        aria-labelledby="pills-sunglasses-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategorySunglasses"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/sunglass-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Sunglass
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategorySunglasses"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategorySunglasses"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="pills-bagpacks"
                        role="tabpanel"
                        aria-labelledby="pills-bagpacks-tab"
                      >
                        <div
                          className="carousel slide"
                          id="carouselCategoryBagpacks"
                          data-bs-touch="false"
                          data-bs-interval="false"
                        >
                          <div className="carousel-inner">
                            <div
                              className="carousel-item active"
                              data-bs-interval="10000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="5000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="carousel-item"
                              data-bs-interval="3000"
                            >
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="carousel-item">
                              <div className="row h-100 align-items-center g-2">
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-5.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-6.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-7.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                                <div className="col-sm-6 col-md-3 mb-3 mb-md-0 h-100">
                                  <div className="card card-span h-100 text-white">
                                    <img
                                      className="img-fluid h-100"
                                      src="assets/img/gallery/bagpacks-8.png"
                                      alt="product"
                                    />
                                    <div className="card-img-overlay ps-0">
                                      {' '}
                                    </div>
                                    <div className="card-body ps-0 bg-200">
                                      <h5 className="fw-bold text-1000 text-truncate">
                                        Bagpacks
                                      </h5>
                                      <div className="fw-bold">
                                        <span className="text-600 me-2 text-decoration-line-through">
                                          $500
                                        </span>
                                        <span className="text-primary">
                                          $275
                                        </span>
                                      </div>
                                    </div>
                                    <a className="stretched-link" href="!#"></a>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <button
                                className="carousel-control-prev"
                                type="button"
                                data-bs-target="#carouselCategoryBagpacks"
                                data-bs-slide="prev"
                              >
                                <span
                                  className="carousel-control-prev-icon"
                                  aria-hidden="true"
                                ></span>
                                <span className="visually-hidden">
                                  Previous
                                </span>
                              </button>
                              <button
                                className="carousel-control-next"
                                type="button"
                                data-bs-target="#carouselCategoryBagpacks"
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
                        <div className="col-12 d-flex justify-content-center mt-5">
                          {' '}
                          <a className="btn btn-lg btn-dark" href="#!">
                            View All{' '}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopByCat;
