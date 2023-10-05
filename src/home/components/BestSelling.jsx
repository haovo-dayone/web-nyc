"use client";
import { useState } from "react";
import CollectionTab from "./CollectionTab";
import Carousel from "react-multi-carousel";
import Product from "./Product";
// import OwlCarousel from "react-owl-carousel";
// let owl_carousel = require("owl.carousel");
// console.log(owl_carousel);
// window.fn = owl_carousel;
// import $ from "jquery";
// window.jQuery = $;
// console.log($.fn);

const items = [
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect1.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect2.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/3.webp",
      "/assets/img/collection/newcollect3.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/4.webp",
      "/assets/img/collection/newcollect4.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect2.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/3.webp",
      "/assets/img/collection/newcollect3.webp",
    ],
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/4.webp",
      "/assets/img/collection/newcollect4.webp",
    ],
  },
];

const items2 = [
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect1.webp",
    ],
    rank: 1,
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect2.webp",
    ],
    rank: 2,
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/3.webp",
      "/assets/img/collection/newcollect3.webp",
    ],
    rank: 3,
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/4.webp",
      "/assets/img/collection/newcollect4.webp",
    ],
    rank: 4,
  },
];

const tabs = [
  {
    name: "QUẦN ÁO",
    collection: items,
  },
  {
    name: "NÓN",
    collection: items2,
  },
  {
    name: "GIÀY",
    collection: items,
  },
  {
    name: "TÚI",
    collection: items,
  },
];

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const BestSelling = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="best-selling">
      <div className="container">
        <div className="heading-content d-flex justify-content-between mb-3">
          <div>
            <h3>HÀNG MỚI VỀ</h3>
          </div>
          <CollectionTab
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
      <div className="container">
        <Carousel responsive={responsive} centerMode infinite>
          {/* <div className="d-flex"> */}
          {/* <div> */}
          {tabs[activeTab].collection.map((i) => (
            <Product item={i} />
          ))}
          {/* </div> */}
          {/* </div> */}
          {/* <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div> */}
        </Carousel>
      </div>
    </section>
  );
};
export default BestSelling;
