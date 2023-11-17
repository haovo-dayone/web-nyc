"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Product = ({ item, className }) => {
  const [imageHover, setImageHover] = useState(false);

  // async function getListProduct() {

  // }

  return (
    <Link className={`product ${className}`} href={`/products/${item.id}`}>
      <div
        className="product__images"
        onMouseEnter={() => setImageHover(true)}
        onMouseLeave={() => setImageHover(false)}
      >
        {item.rank && <></>}
        <img className={imageHover && "d-none"} src={item.images[0]}></img>
        <img className={imageHover && "d-block"} src={item.images[1]}></img>
        <span className="heart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="22"
            viewBox="0 0 24 22"
            fill="none"
          >
            <path
              d="M21.0433 11.8617L11.9999 20.9052L2.95639 11.8617C0.576257 9.4816 0.576257 5.62265 2.95639 3.24252C5.33652 0.86239 9.19547 0.86239 11.5756 3.24252C11.8099 3.47683 12.1898 3.47683 12.4241 3.24252C14.8043 0.86239 18.6632 0.86239 21.0433 3.24252C23.4235 5.62265 23.4235 9.4816 21.0433 11.8617Z"
              fill="#E8E8E8"
              stroke="white"
              stroke-width="1.2"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>
        </span>
      </div>
      <div className="bg-white">
        <h4 className="title p-2">{item.title}</h4>
        {item.price ? <span className="price p-2">{item.price}</span> : ""}
        {/* {item.price && <span className="price p-2">{item.price}</span>} */}
      </div>
    </Link>
  );
};

export default Product;
