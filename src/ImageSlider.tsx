import { useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
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
    <div className="img-slider-container">
      <img src={imageUrls[imageIndex]} className="img-slider-img" />
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
    </div>
  );
}
