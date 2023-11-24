import React from "react";

const Item = [
  {
    image: "",
    title: "",
    quantity: "",
    price: "",
  },
];

const CartItem = ({ item }) => {
  return (
    <div className="item-cart ">
      <div className="box-media-item-cart">
        <div className="box-media">
          <div className="input-line">
            <input
              className="input-item-line "
              type="checkbox"
              defaultChecked=""
            />
          </div>
          <div className="img-media">
            <a href="/products/mlb-quan-jogger-nu-lung-thun-basic-athleisure-medium-logo-3fptb2234-3">
              <img
                src={item.product.images[0]}
                alt="MLB - Quần jogger nữ lưng thun Basic Athleisure Medium Logo"
              />
            </a>
          </div>
        </div>
        <div className="box-info">
          <div className="box-info-inner">
            <div className="title-item">
              <a href="/products/mlb-quan-jogger-nu-lung-thun-basic-athleisure-medium-logo-3fptb2234-3">
                {item.product.name}
              </a>
            </div>
            <div className="variant-item">07CBL / M / 3FPTB2234</div>
            <div className="quantity-item">{`So luong ${item.quantity}`}</div>
            <div className="price-item">{item.product.price}</div>
          </div>
        </div>
        <div className="box-delete-mobile">
          <a href="/cart/change?line=1&quantity=0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="none"
            >
              {" "}
              <path
                d="M13.9998 6L5.99988 14"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />{" "}
              <path
                d="M6 6L13.9999 14"
                stroke="black"
                strokeLinecap="square"
                strokeLinejoin="round"
              />{" "}
            </svg>
          </a>
        </div>
      </div>
      <div className="box-action-item-cart">
        <div className="line-box-action">
          <a className="change-option" data-quantity={1}>
            Thay đổi tùy chọn
          </a>
          <a href="/cart/change?line=1&quantity=0" className="delete-option">
            Xóa
          </a>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
