import { useState } from "react";
import {
  ArrowBigLeft,
  ArrowBigRight,
  CircleDot,
  CircleDotDashed,
} from "lucide-react";
import "./imageSlider.css";

type ImageSliderProps = {
  image: {
    url: string;
    alt: string;
  }[];
};

export function ImageSlider({ image }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return image.length - 1;
      return index - 1;
    });
  }

  function showNextImage() {
    setImageIndex((index) => {
      if (index === image.length - 1) return 0;
      return index + 1;
    });
  }

  return (
    <>
      <section arial-label="Image Slider" className="img-slider-container">
        <a href="#skip-image-slider" className="skip-link">
          Skip Image Slider
        </a>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            overflow: "hidden",
          }}
        >
          {image.map(({ url, alt }, index) => (
            <img
              key={url}
              src={url}
              alt={alt}
              arial-hidden={imageIndex !== index}
              className="img-slider-img"
              style={{ translate: `${-100 * imageIndex}%` }}
            />
          ))}
        </div>
        <button
          onClick={showPrevImage}
          className="img-slider-button"
          style={{ left: 0 }}
          aria-label="View Previous Image"
        >
          <ArrowBigLeft arial-hidden />
        </button>
        <button
          onClick={showNextImage}
          className="img-slider-button"
          style={{ right: 0 }}
          aria-label="View Next Image"
        >
          <ArrowBigRight arial-hidden />
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
          {image.map((_, index) => (
            <button
              key={index}
              className="img-slider-dot-btn"
              aria-label={`View Image ${index + 1}`}
              onClick={() => setImageIndex(index)}
            >
              {index === imageIndex ? (
                <CircleDot arial-hidden />
              ) : (
                <CircleDotDashed arial-hidden />
              )}
            </button>
          ))}
        </div>
        <div id="skip-image-slider" />
      </section>
    </>
  );
}
