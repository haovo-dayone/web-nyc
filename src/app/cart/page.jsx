"use client";
import Breadcrumb from "@/collection/component/Breadcrumb";
import { useEffect, useState } from "react";
import CartItem from "@/home/components/CartItem";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartId, setCartId] = useState(0);
  const [user, setUser] = useState({});
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("userInfo")));
  }, []);

  // const updateToCart = async (product) => {
  //   // const updatedCart = [...cartItems];
  //   const updatedItems = cartItems.filter((item) => item.id !== product.id);

  //   setCartItems(updatedItems);
  // };

  // const updateCart = async () => {
  //   await fetch("http://localhost:1337/api/carts/" + cartId, {
  //     method: "PUT",
  //     body: JSON.stringify({
  //       data: {
  //         user: user.id,
  //         products: [...cartItems],
  //       },
  //     }),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   });
  // };
  // useEffect(() => {
  //   updateCart();
  // }, [cartItems]);

  const fetchCartData = async () => {
    try {
      const res = await fetch(
        `http://localhost:1337/api/users/${user.id}?populate=*`
      );
      const data = await res.json();
      let cartItems = data.cart.products.map((product) => {
        return {
          ...product,
          selected: false,
        };
      });
      // console.log(data);
      setCartId(data.cart.id);
      setCartItems(cartItems);
      tempTotalPrice = 0;
    } catch (error) {
      // console.error("Lỗi khi lấy dữ liệu giỏ hàng:", error);
    }
  };
  const handleSelectAllChange = (event) => {
    console.log(event.target.checked);
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        return {
          ...item,
          selected: event.target.checked,
        };
      });
    });
  };

  const handleSelect = (event, item) => {
    console.log(event.target.checked, item);
    const newList = cartItems.map((i) => {
      if (i.product.id === item.product.id) {
        return {
          ...i,
          selected: event.target.checked,
        };
      } else return i;
    });
    console.log("123", newList);
    setCartItems(newList);
  };

  const DeleteCartItems = async (productId) => {
    const existingItem = [...cartItems];
    const updatedCart = existingItem.filter(
      (item) => item.product.id !== productId
    );

    // alert(`${product.name} đã được thêm vào giỏ hàng!`);
    setCartItems(updatedCart);
  };

  const updateCart = async () => {
    await fetch(`http://localhost:1337/api/carts/${cartId}`, {
      method: "PUT",
      body: JSON.stringify({
        data: {
          products: [...cartItems],
        },
      }),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };
  useEffect(() => {
    cartItems.length !== 0 && updateCart();
  }, [cartItems]);

  const updateToCart = async (product) => {
    const updatedItems = cartItems.filter(
      (item) => item.product.id !== product
    );
    console.log("cartItems", cartItems);
    console.log("product", product);

    setCartItems(updatedItems);
  };
  useEffect(() => {
    fetchCartData();
  }, [user]);

  useEffect(() => {
    updateCart();
    console.log(cartItems);
    setTotalPrice(
      cartItems.reduce((totalPrice, item) => {
        return (
          totalPrice +
          Number(item.product.price) *
            Number(item.quantity) *
            Number(item.selected)
        );
      }, 0)
    );
  }, [cartItems]);
  return (
    <>
      <div className="breadcrumb-container">
        <Breadcrumb />

        <div className="wrapper-cart ms-3 row">
          <div className="col-md-8">
            <div className="main-cart">
              <div className="heading-cart">
                <input
                  type="checkbox"
                  className="select-all"
                  onChange={handleSelectAllChange}
                />
                <span className="ms-2">Chọn tất cả</span>
              </div>
              {cartItems?.length > 0 ? (
                <>
                  <div className="body-cart">
                    {cartItems.map((item) => (
                      <CartItem
                        item={item}
                        key={item.id}
                        updateToCart={updateToCart}
                        DeleteCartItems={DeleteCartItems}
                        handleSelect={handleSelect}
                      />
                    ))}
                  </div>
                  <div class="back-shopping">
                    <span>
                      <a href="/">Tiếp tục mua hàng</a>
                    </span>
                  </div>
                </>
              ) : (
                <div className="empty-cart">
                  <div className="icon-empty-cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={64}
                      height={64}
                      fill="none"
                    >
                      {" "}
                      <path
                        d="M21.27 31.67C21.76 31.67 22.19 31.48 22.57 31.1C22.95 30.72 23.14 30.29 23.14 29.8C23.14 29.31 22.95 28.88 22.57 28.5C22.19 28.12 21.76 27.93 21.27 27.93C20.74 27.93 20.29 28.12 19.94 28.5C19.58 28.88 19.41 29.31 19.41 29.8C19.41 30.29 19.59 30.72 19.94 31.1C20.3 31.48 20.74 31.67 21.27 31.67ZM32.27 31.67C32.76 31.67 33.19 31.48 33.57 31.1C33.95 30.72 34.14 30.29 34.14 29.8C34.14 29.31 33.95 28.88 33.57 28.5C33.19 28.12 32.76 27.93 32.27 27.93C31.78 27.93 31.35 28.12 30.97 28.5C30.59 28.88 30.4 29.31 30.4 29.8C30.4 30.29 30.59 30.72 30.97 31.1C31.35 31.48 31.78 31.67 32.27 31.67ZM43.14 31.67C43.63 31.67 44.06 31.48 44.44 31.1C44.82 30.72 45.01 30.29 45.01 29.8C45.01 29.31 44.82 28.88 44.44 28.5C44.06 28.12 43.63 27.93 43.14 27.93C42.65 27.93 42.22 28.12 41.84 28.5C41.46 28.88 41.27 29.31 41.27 29.8C41.27 30.29 41.46 30.72 41.84 31.1C42.22 31.48 42.65 31.67 43.14 31.67ZM9 55.2V15.6C9 14.58 9.34 13.72 10.03 13.03C10.72 12.34 11.58 12 12.6 12H51.8C52.82 12 53.68 12.34 54.37 13.03C55.06 13.72 55.4 14.57 55.4 15.6V44.13C55.4 45.15 55.06 46.01 54.37 46.7C53.68 47.39 52.83 47.73 51.8 47.73H16.47L9 55.2ZM10.47 51.6L15.8 46.27H51.8C52.42 46.27 52.93 46.07 53.33 45.67C53.73 45.27 53.93 44.76 53.93 44.14V15.6C53.93 14.98 53.73 14.47 53.33 14.07C52.93 13.67 52.42 13.47 51.8 13.47H12.6C11.98 13.47 11.47 13.67 11.07 14.07C10.67 14.47 10.47 14.98 10.47 15.6V51.6Z"
                        fill="#D0D0D0"
                      />{" "}
                      <path
                        opacity="0.05"
                        d="M51.8 42.2696H15.8L10.47 47.5996V51.5996L15.8 46.2696H51.8C52.42 46.2696 52.93 46.0696 53.33 45.6696C53.73 45.2696 53.93 44.7596 53.93 44.1396V40.1396C53.93 40.7596 53.73 41.2696 53.33 41.6696C52.93 42.0696 52.42 42.2696 51.8 42.2696Z"
                        fill="black"
                      />{" "}
                    </svg>
                  </div>
                  <span className="text-empty-cart">
                    Không có sản phẩm nào trong giỏ hàng
                  </span>
                  <a href="/">Tiếp tục mua hàng</a>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-4">
            <div className="sidebar-cart">
              <div className="sidebar-cart-inner">
                <h4>Thông tin đơn hàng</h4>
                <ul>
                  <li>
                    <label>Tạm tính</label>
                    <span className="subtotal-price">{`${totalPrice} VND`}</span>
                  </li>
                  <li>
                    <labe1>Phí vận chuyển</labe1>
                    <span>15000</span>
                  </li>
                </ul>
                <div className="total-price-cart">
                  <label>Tổng đơn hàng</label>
                  <span className="total-price">{totalPrice + 15000}₫</span>
                </div>
              </div>
              <div className="sidebar-cart-action">
                <button id="process-checkout" className="">
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;
