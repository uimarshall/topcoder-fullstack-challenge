import React from 'react';

const SectionBgImage = () => {
  return (
    <>
      <div
        className="bg-holder overlay overlay-light"
        style={{
          backgroundImage: 'url(assets/img/gallery/header-bg.png)',
          backgroundSize: 'cover',
        }}
      ></div>
    </>
  );
};

export default SectionBgImage;
