/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';

const Varieties = () => {
  return (
    <>
      <section className="py-0" id="outlet">
        <div className="container">
          <div className="row h-100 g-0">
            <div className="col-md-6">
              <div className="card card-span h-100 text-white">
                <img
                  className="card-img h-100"
                  src="assets/img/gallery/summer.png"
                  alt="product"
                />
                <div className="card-img-overlay bg-dark-gradient rounded-0">
                  <div className="p-5 p-md-2 p-xl-5 d-flex flex-column flex-end-center align-items-baseline h-100">
                    <h1 className="fs-md-4 fs-lg-7 text-light">
                      Summer of '21{' '}
                    </h1>
                  </div>
                </div>
                <a className="stretched-link" href="#!"></a>
              </div>
            </div>
            <div className="col-md-6 h-100">
              <div className="row h-100 g-0">
                <div className="col-md-6 h-100">
                  <div className="card card-span h-100 text-white">
                    <img
                      className="card-img h-100"
                      src="assets/img/gallery/sunglasses.png"
                      alt="product"
                    />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Sunglasses</h3>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!"></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-span h-100 text-white">
                    <img
                      className="card-img h-100"
                      src="assets/img/gallery/footwear.png"
                      alt="product"
                    />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Footwear</h3>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!"></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-span h-100 text-white">
                    <img
                      className="card-img h-100"
                      src="assets/img/gallery/hat-black-border.png"
                      alt="product"
                    />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Hat</h3>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!"></a>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="card card-span h-100 text-white">
                    <img
                      className="card-img h-100"
                      src="assets/img/gallery/watches.png"
                      alt="product"
                    />
                    <div className="card-img-overlay bg-dark-gradient rounded-0">
                      <div className="p-5 p-xl-5 p-md-0">
                        <h3 className="text-light">Watches</h3>
                      </div>
                    </div>
                    <a className="stretched-link" href="#!">
                      {' '}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Varieties;
