import { useState } from "react";
import {
  ArrowBigLeft,
  ArrowBigRight,
  CircleDot,
  CircleDotDashed,
} from "lucide-react";
import "./imageSlider.css";

type ImageSliderProps = {
  imageUrls: string[];
};

export function ImageSlider({ imageUrls }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return imageUrls.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === imageUrls.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <>
      <div className="img-slider-container">
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {imageUrls.map((url, index) => (
            <img
              key={index}
              src={url}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button
          onClick={showPrevImage}
          className="img-slider-button"
          style={{ left: 0 }}
        >
          <ArrowBigLeft />
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-button"
          style={{ right: 0 }}
        >
          <ArrowBigRight />
        </button>
        <div
          style={{
            position: "absolute",
            bottom: "0.5rem",
            left: "50%",
            translate: "-50%",
            display: "flex",
            gap: "0.25rem",
          }}
        >
          {imageUrls.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? <CircleDot /> : <CircleDotDashed />}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
