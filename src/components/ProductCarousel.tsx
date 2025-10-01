import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductCarousel() {
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [nav1, setNav1] = useState<any>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [nav2, setNav2] = useState<any>(null);

  const images = [
    "/img/product/details/product-details-1.jpg",
    "/img/product/details/product-details-2.jpg",
    "/img/product/details/product-details-3.jpg",
    "/img/product/details/product-details-4.jpg",
  ];

  return (
    <div className="product__details__pic">
      {/* Main big image */}
      <Slider
        asNavFor={nav2}
        ref={(slider1) => setNav1(slider1)}
        arrows={false}
        fade={true}
      >
        {images.map((src, i) => (
          <div key={i}>
            <img
              src={src}
              alt={`Product ${i + 1}`}
              className="w-full h-96 object-contain"
            />
          </div>
        ))}
      </Slider>

      {/* Thumbnail slider */}
      <div className="mt-4">
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={4}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={false}
        >
          {images.map((src, i) => (
            <div key={i} className="px-2">
              <img
                src={src}
                alt={`Thumb ${i + 1}`}
                className="w-24 h-24 object-contain border rounded-md cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
