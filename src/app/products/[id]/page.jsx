"use client";
import { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import { useRouter } from "next/navigation";

const images = [
  "/assets/img/productdetail/anhao.jpg",
  "/assets/img/productdetail/anhao1.webp",
  "/assets/img/productdetail/anhao2.webp",
  "/assets/img/productdetail/anhao3.webp",
  "/assets/img/productdetail/anhao4.webp",
  "/assets/img/productdetail/anhao5.webp",
];
const sizes = [
  { name: "XS" },
  { name: "S" },
  { name: "M" },
  { name: "L" },
  { name: "XL" },
];

const productDetail = ({ params }) => {
  const [sizeActive, setSizeActive] = useState(0);
  const [active, setActive] = useState(0);
  const [amount, setAmount] = useState(1);
  const router = useRouter();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (params.id) {
      fetch(`http://localhost:1337/api/products/${params.id}`)
        .then((response) => response.json())
        .then((data) => setProduct(data));
    }
  }, [params.id]);
  if (!product) {
    return <div>Product not found</div>;
  }

  //const handleClick = (e) => {
  //   if (sizeActive !== "") {
  //     const oldSelectedSize = document.getElementById(sizeActive);
  //     oldSelectedSize.setAttribute("class", "item-swatch");
  //   }
  //   e.target.setAttribute("class", "item-swatch active");

  //   setSizeActive(e.target.getAttribute("id"));
  // };
  return (
    <div className="product-detail">
      <div className="container">
        <div className="product-detail-container row">
          <div className="product-detail-left col-xl-6 col-lg-6">
            <div>
              <Carousel
                interval={null}
                controls={false}
                indicators={true}
                activeIndex={active}
              >
                {images.map((item) => (
                  <Carousel.Item>
                    <div className="w-100">
                      <img src={item}></img>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
            <div className="d-flex justify-content-center">
              {images.map((item, index) => (
                <div
                  className="item-image-detail bg-warning"
                  onClick={() => {
                    setActive(index);
                  }}
                >
                  <img src={item} alt="" />
                </div>
              ))}
            </div>
          </div>
          <div className="product-detail-right col-xl-6 col-lg-6">
            <div className="info-product-detail">
              <div className="heading-product-detail d-flex">
                <div className="title-product-detail">
                  <h1>
                    MLB - Áo sweatshirt unisex tay dài Classic Monogram Bag Big
                    Logo Overfit
                  </h1>
                </div>
                <i class="fa-regular fa-heart p-2"></i>
              </div>
              <div className="price-product-detail">
                <span>2,390,000đ</span>
              </div>
              <div className="color-product-detail">
                <div className="item-swatch">
                  <img
                    src="https://product.hstatic.net/200000642007/product/icon_50bks_3amtu0131_cf44c9113fa34a119ac49b786b59900d_2198242b47e24313ad924743924b53bb.jpg"
                    alt=""
                  />
                </div>
                <div className="item-swatch">
                  <img
                    src="https://product.hstatic.net/200000642007/product/icon_50crs_3amtu0131_74ec727503984bd288f2698d516904de_d6dfd25b89a7401cb39b17f5f61c2198.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="selector-product-detail">
                <div className="selector-product-detail-inner">
                  <div className="option-swatch">
                    <div className="title-swatch">
                      <h4>Chọn kích thước</h4>
                      <span className="open-size-chart">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={9}
                          viewBox="0 0 20 9"
                          fill="none"
                        >
                          {" "}
                          <rect
                            x="0.5"
                            y="0.5"
                            width={19}
                            height={8}
                            rx="0.5"
                            stroke="black"
                          />{" "}
                          <rect
                            x="3.5"
                            y={4}
                            width={1}
                            height={4}
                            fill="black"
                          />{" "}
                          <rect
                            x="6.5"
                            y={6}
                            width={1}
                            height={2}
                            fill="black"
                          />{" "}
                          <rect
                            x="12.5"
                            y={6}
                            width={1}
                            height={2}
                            fill="black"
                          />{" "}
                          <rect
                            x="9.5"
                            y={4}
                            width={1}
                            height={4}
                            fill="black"
                          />{" "}
                          <rect
                            x="15.5"
                            y={4}
                            width={1}
                            height={4}
                            fill="black"
                          />{" "}
                        </svg>
                        Hướng dẫn kích thước
                      </span>
                    </div>
                    <div className="swatch-size">
                      {sizes.map((s, index) => (
                        <div
                          className={`item-swatch ${
                            sizeActive === index && "active"
                          }`}
                          onClick={() => setSizeActive(index)}
                        >
                          {s.name}
                        </div>
                      ))}
                      {/* <a
                        id="XS"
                        href="#"
                        className="item-swatch"
                        onClick={handleClick}
                      >
                        XS
                      </a>
                      <a id="S" className="item-swatch" onClick={handleClick}>
                        S
                      </a>
                      <a id="M" className="item-swatch" onClick={handleClick}>
                        M
                      </a>
                      <div id="L" className="item-swatch" onClick={handleClick}>
                        L
                      </div> */}
                    </div>
                    <div className="details-promotion">
                      <div className="box-gift-detail">
                        <b>Peek a Boo | Pick a Deal</b>
                        Hoàn ngay 300k cho đơn hàng nguyên giá từ 2,990k | Nhập
                        mã: MLB300K
                        <br />
                        Thời gian: 28 - 31.10.2023
                        <br />
                        *Chương trình không áp dụng cùng các CTKM khác
                        <br />
                        *Chỉ áp dụng cho một số sản phẩm màu đen và cam
                        <br />
                        <br />
                        <b>MLB Chào bạn mới</b>
                        Nhận ngay ưu đãi 10% khi đăng ký thành viên và mua đơn
                        hàng đầu tiên tại website*
                        <br />
                        Nhập mã: MLBWELCOME
                        <br />
                        Chương trình bắt đầu từ 03.10.2023 cho đến khi có thông
                        báo mới
                        <br />
                        *Áp dụng cho đơn hàng nguyên giá
                      </div>
                    </div>
                    <div className="quantity-detail">
                      <div className="wrapper-quantity">
                        <button
                          className="btn-minus"
                          onClick={() => setAmount(amount - 1)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            {" "}
                            <path
                              d="M6 10H14"
                              stroke="#D0D0D0"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                            />{" "}
                          </svg>
                        </button>
                        <input
                          className="input-quantity"
                          type="text"
                          value={amount}
                        />
                        <button
                          className="btn-plus"
                          onClick={() => setAmount(amount + 1)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={20}
                            height={20}
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            {" "}
                            <path
                              d="M10 5V15"
                              stroke="black"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                            />{" "}
                            <path
                              d="M5 10H15"
                              stroke="black"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                            />{" "}
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="action-detail">
                      <button>Thêm vào giỏ</button>
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="2"
                          height="14"
                          viewBox="0 0 2 14"
                          fill="none"
                        >
                          {" "}
                          <rect
                            x="0.5"
                            width="1"
                            height="14"
                            rx="0.5"
                            fill="white"
                            fill-opacity="0.32"
                          ></rect>{" "}
                        </svg>
                      </span>
                      <button>Mua Ngay</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="description-product-detail">
            <div className="wrapper-description">
              <div className="tab-description">
                <div className="item-tab-des mb-3">
                  <b>THÔNG TIN SẢN PHẨM</b>
                </div>
                <div className="item-content-tab">
                  Tự tin tỏa sáng cùng chiếc áo thun Classic Monogram Big Lux
                  với họa tiết monogram cực kì đơn giản. Chiếc item này dành cho
                  những ngày bạn không biết mặc gì nhưng vẫn đảm bảo được phong
                  cách thời trang cá nhân, cũng như làm đa dạng sự lựa chọn cho
                  tủ đồ của bạn.<div>&nbsp;</div>
                  <div>
                    Thương hiệu: MLB
                    <div>
                      Xuất xứ: Hàn Quốc
                      <br />
                      Giới tính: Unisex
                      <br />
                      Kiểu dáng: Áo thun
                      <br />
                      Màu sắc: Navy, Black, Cream, Pink
                      <br />
                      Chất liệu: 100% cotton
                      <br />
                      Cổ tròn, tay ngắn
                      <br />
                      Hoạ tiết: Trơn một màu
                      <br />
                      Thiết kế:
                      <ul>
                        <li>Bo viền cổ áo</li>
                        <li>Chất vải mềm mịn, thoáng mát</li>
                        <li>
                          Thiết kế logo bóng chày lớn in nổi bật ở mặt sau áo
                        </li>
                        <li>
                          Gam màu hiện đại dễ dàng phối với nhiều trang phục và
                          phụ kiện
                        </li>
                      </ul>
                      Logo: Chi tiết logo bóng chày thêu nổi bật ở ngực trái
                      <br />
                      Phom áo: Rộng, thoải mái
                      <br />
                      Thích hợp mặc trong các dịp: Đi chơi, đi làm....
                      <br />
                      Xu hướng theo mùa: Sử dụng được tất cả các mùa trong năm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default productDetail;
