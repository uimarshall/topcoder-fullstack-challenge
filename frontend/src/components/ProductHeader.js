import React from 'react';

const ProductHeader = ({ title }) => {
  return (
    <>
      <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
        <h5 className="fw-bold fs-3 fs-lg-5 lh-sm text-capitalize">{title}</h5>
      </div>
    </>
  );
};

export default ProductHeader;
