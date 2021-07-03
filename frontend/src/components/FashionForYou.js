/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const FashionForYou = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row h-100 g-0">
            <div className="col-md-6">
              <div className="bg-300 p-4 h-100 d-flex flex-column justify-content-center">
                <h1 className="fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6">
                  Gentle Formal Looks{' '}
                </h1>
                <p className="mb-5 fs-1">
                  We provide the top formal apparel package to make your job
                  look confident and comfortable. Stay connect.
                </p>
                <div className="d-grid gap-2 d-md-block">
                  <a className="btn btn-lg btn-dark" href="#!" role="button">
                    Explore Collection
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                <img
                  className="card-img h-100"
                  src="assets/img/gallery/sharp-dress.png"
                  alt="product"
                />
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FashionForYou;
