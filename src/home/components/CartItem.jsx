import React, { useEffect, useState } from "react";

// const Item = [
//   {
//     image: "",
//     title: "",
//     quantity: "",
//     price: "",
//   },
// ];

const CartItem = ({ item, updateToCart, DeleteCartItems, handleSelect }) => {
  // const [cartItems, setCartItems] = useState([]);
  // const removeFromCart = (productId) => {
  //   const updatedCart = cartItems.filter((item) => item.id !== productId);
  //   setCartItems(updatedCart);
  // };
  return (
    <div className="item-cart ">
      <div className="box-media-item-cart">
        <div className="box-media">
          <div className="input-line">
            <input
              className="input-item-line "
              type="checkbox"
              checked={item.selected}
              onClick={(e) => handleSelect(e, item)}
            />
          </div>
          <div className="img-media">
            <a href={`/products/${item.product.id}`}>
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
              <a href={`/products/${item.product.id}`}>{item.product.name}</a>
            </div>
            {/* <div className="variant-item">07CBL / M / 3FPTB2234</div> */}
            <div className="quantity-item">{`Số  lượng: ${item.quantity}`}</div>
            <div className="price-item">{item.product.price}</div>
          </div>
        </div>
      </div>
      <div className="box-action-item-cart">
        <div className="line-box-action">
          {/* <span className="change-option">Thay đổi tùy chọn</span> */}
          <span
            // href="/cart"
            className="delete-option"
            onClick={() => DeleteCartItems(item.product.id)}
          >
            Xóa
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
