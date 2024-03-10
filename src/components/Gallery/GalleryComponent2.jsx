import React from "react";
import "./GalleryComponent2.scss";

export const GalleryComponent2 = ({ images }) => {
  const imageElements = images.map((image, index) => (
    <div key={index} className="gallery-item">
      <img
        src={image.srcSmall}
        data-src-big={image.srcBig}
        className="gallery-image"
        alt={image.alt}
      />
    </div>
  ));

  return <div className="gallery-container">{imageElements}</div>;
};
