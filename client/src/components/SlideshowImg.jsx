import React from 'react';

const SlideshowImg = ({image, setLength}) => (
  <div className="carousel-item">
    <img className="d-block" src={image.imgUrl} alt={image.description}/>
  </div>
)

export default SlideshowImg;