"use client";
import { useEffect } from "react";

const paymentSuccess = () => {
  // const [cartId, setCartId] = useState(0);

  const paySuccess = async () => {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    const res = await fetch(
      `http://localhost:1337/api/users/${user.id}?populate=*`
    );

    const { cart } = await res.json();

    await fetch(`http://localhost:1337/api/carts/${cart.id}`, {
      method: "PUT",
      body: JSON.stringify({
        data: {
          products: [],
        },
      }),
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    paySuccess();
  }, []);

  return (
    <div className="layout-payment">
      <div className="container">
        <div className="wrapper-payment">
          <div className="form-pay">
            <div className="d-flex justify-content-center logo pb-3">
              <i class="fa-solid fa-circle-check"></i>
            </div>
            <div className="form-description">
              <h1 className="text-nowrap">Thanh Toán Thành Công</h1>
              <p className="text-center">
                Đơn hàng của quý khách đã thanh toán thành công. MLB sẽ sớm liên
                hệ với quý khách sớm để bàn giao sản phẩm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default paymentSuccess;
