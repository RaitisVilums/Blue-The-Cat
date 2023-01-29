import { images } from "../DummyData/DUMMY_DATA";
import { useState } from "react";
import "./gallery-big.styles.scss";

const GalleryBig = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const onClickPrev = () => {
    if (currentGroup === 0) {
      setCurrentGroup(Math.ceil(images.length / 3) - 1);
    } else {
      setCurrentGroup(currentGroup - 1);
    }
  };
  const onClickNext = () => {
    if (currentGroup === Math.ceil(images.length / 3) - 1) {
      setCurrentGroup(0);
    } else {
      setCurrentGroup(currentGroup + 1);
    }
  };

  return (
    <div className="gallery-wrapper-big">
      <button onClick={onClickPrev} className="btn btn-prev"></button>
      <div className="image-container">
        <img
          loading="lazy"
          role="presentation"
          src={images[currentGroup * 3]}
          alt=""
        />
      </div>
      <div className="image-container">
        <img
          loading="lazy"
          role="presentation"
          src={images[currentGroup * 3 + 1]}
          alt=""
        />
      </div>
      <div className="image-container">
        <img
          loading="lazy"
          role="presentation"
          src={images[currentGroup * 3 + 2]}
          alt=""
        />
      </div>
      <button onClick={onClickNext} className="btn btn-next"></button>
    </div>
  );
};

export default GalleryBig;
