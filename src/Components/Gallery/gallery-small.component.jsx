import { images } from "../DummyData/DUMMY_DATA";
import { useState } from "react";
import "./gallery-small.styles.scss";

const GallerySmall = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onClickPrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(images.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const onClickNext = () => {
    if (currentIndex === images.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="gallery-wrapper-small">
      <button onClick={onClickPrev} className="btn btn-prev"></button>
      <div className="image-container">
        <img
          loading="lazy"
          role="presentation"
          src={images[currentIndex]}
          alt="-"
        />
      </div>

      <button onClick={onClickNext} className="btn btn-next"></button>
    </div>
  );
};

export default GallerySmall;
