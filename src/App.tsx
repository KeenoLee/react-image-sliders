import { ImageSlider } from "./ImageSlider";
import banner1 from "./asset/banner-1.jpeg";
import banner2 from "./asset/banner-2.jpeg";
import banner3 from "./asset/banner-3.jpeg";
import banner4 from "./asset/banner-4.jpeg";

const images = [
  { url: banner1, alt: "banner 1" },
  { url: banner2, alt: "banner 2" },
  { url: banner3, alt: "banner 3" },
  { url: banner4, alt: "banner 4" },
];

function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        // Instead of manually hard coding the height -> you can use aspect ratio
        // height: "500px", -> aspectRatio: ""
        aspectRatio: "10/4",
        margin: "0 auto",
      }}
    >
      <ImageSlider image={images} />
      <a href="/" style={{ fontSize: "4rem" }}>
        Link
      </a>
    </div>
  );
}

export default App;
