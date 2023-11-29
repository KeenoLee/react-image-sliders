import { ImageSlider } from "./ImageSlider";
import banner1 from "./asset/banner-1.jpeg";
import banner2 from "./asset/banner-2.jpeg";
import banner3 from "./asset/banner-3.jpeg";
import banner4 from "./asset/banner-4.jpeg";

const images = [banner1, banner2, banner3, banner4];

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
      <ImageSlider imageUrls={images} />
    </div>
  );
}

export default App;
