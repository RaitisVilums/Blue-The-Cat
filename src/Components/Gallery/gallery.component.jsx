import "./gallery.styles.scss";
import GalleryBig from "./gallery-big.component";
import GallerySmall from "./gallery-small.component";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [width, setWidth] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
    }
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function handleResize() {
    setWidth(window.innerWidth);
  }

  return (
    <section id="gallery" className="gallery">
      <div className="heading">
        <h1>Gallery</h1>
      </div>
      <div className="gallery-heading">
        <h2>These are my everyday moods!</h2>
      </div>
      {width > 750 ? <GalleryBig /> : <GallerySmall />}
    </section>
  );
};

export default Gallery;
