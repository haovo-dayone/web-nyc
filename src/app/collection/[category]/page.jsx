"use client";

import Breadcrumb from "@/collection/component/Breadcrumb";
import Dropdown from "@/collection/component/Dropdown";
import Product from "@/home/components/Product";
import { useEffect, useState } from "react";

const apparels = [
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect1.webp",
    ],
    rank: 1,
    price: "2,000,000đ",
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect2.webp",
    ],
    rank: 2,
    price: "2,000,000đ",
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/3.webp",
      "/assets/img/collection/newcollect3.webp",
    ],
    rank: 3,
    price: "2,000,000đ",
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/4.webp",
      "/assets/img/collection/newcollect4.webp",
    ],
    rank: 4,
    price: "2,000,000đ",
  },
];

const caps = [
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect1.webp",
    ],
    price: "2,000,000₫",
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/2.webp",
      "/assets/img/collection/newcollect2.webp",
    ],
    price: "2,000,000đ",
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/3.webp",
      "/assets/img/collection/newcollect3.webp",
    ],
    price: "2,000,000đ",
  },
  {
    title: "MLB - Áo thun unisex cổ tròn tay ngắn Pop Art Graphic Overfit",
    colors: ["#0d6efd", "#e9ecef", "#6f42c1", "#dc3545", "#000"],
    images: [
      "/assets/img/collection/4.webp",
      "/assets/img/collection/newcollect4.webp",
    ],
    price: "2,000,000đ",
  },
];

const Apparel = ({ params }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    console.log(params);
    switch (params.category) {
      case "apparel":
        setProducts(apparels);
        break;
      case "cap":
        setProducts(caps);
        break;
    }
  }, [params]);

  return (
    <>
      <div className="main-title-collection text-center">
        <h1>Quần Áo</h1>
      </div>
      <div className="description-collection">
        <div className="container">
          <div className="des-collection">
            <p className="text-center">
              Bộ sưu tập <strong>Quần Áo MLB </strong> tại MLB Việt Nam - Thời
              trang thể thao đa dạng.
            </p>
            <p className="description text-center">
              <strong>MLB Việt Nam</strong> tự hào giới thiệu bộ sưu tập Áo MLB
              với thiết kế đa dạng từ áo phông, áo hoodie đến áo khoác, sử dụng
              chất liệu thoáng khí và co giãn để mang đến sự thoải mái và linh
              hoạt khi bạn vận động. Khám phá bộ sưu tập Quần Áo MLB và tạo nên
              phong cách thể thao đẳng cấp và nổi bật.
            </p>
          </div>
        </div>
      </div>
      <div className="title-collection">
        <div className="container">
          <div className="tittle-collection-inner d-flex justify-content-between">
            <Breadcrumb />
            <Dropdown />
          </div>
        </div>
      </div>
      <div className="content-collection">
        <div className="container">
          <div className="row">
            {products.map((i, index) => (
              <Product key={index} item={i} className="col-sm-3" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Apparel;
