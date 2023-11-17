"use client";
import Breadcrumb from "@/collection/component/Breadcrumb";
import { useEffect, useState } from "react";

const accountUser = () => {
  const [userName, setUsername] = useState("");
  // const [removeAccount, setRemoveAccount] = useState("")

  const handleClick = () => {
    localStorage.removeItem("auth");
  };

  useEffect(() => {
    let user = localStorage.getItem("userInfo");
    setUsername(JSON.parse(user).username);
  }, []);

  return (
    <div>
      <div className="layout-main-account">
        <div className="wrapper-account">
          <div className="sidebar-account">
            <div className="sidebar-inner">
              <h2>Tài khoản</h2>
              <div className="box-sidebar">
                <h4>
                  Thông tin mua hàng
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={10}
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      {" "}
                      <path
                        d="M0.919922 1L4.91992 5L0.91992 9"
                        stroke="black"
                        strokeLinecap="square"
                      />{" "}
                    </svg>
                  </span>
                </h4>
                <ul>
                  <li>
                    <a href="/account?view=orders">Thông tin đơn hàng</a>
                  </li>
                  <li>
                    <a href="/pages/kiem-tra-don-hang">Theo dõi đơn hàng</a>
                  </li>
                </ul>
              </div>
              <div className="box-sidebar">
                <h4>
                  Thông tin hoạt động
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={10}
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      {" "}
                      <path
                        d="M0.919922 1L4.91992 5L0.91992 9"
                        stroke="black"
                        strokeLinecap="square"
                      />{" "}
                    </svg>
                  </span>
                </h4>
                <ul>
                  <li>
                    <a href="/account?view=wishlist">Wishlist</a>
                  </li>
                  <li>
                    <a href="/account?view=recently">Xem gần đây</a>
                  </li>
                </ul>
              </div>
              <div className="box-sidebar">
                <h4>
                  Cài đặt tài khoản
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={6}
                      height={10}
                      viewBox="0 0 6 10"
                      fill="none"
                    >
                      {" "}
                      <path
                        d="M0.919922 1L4.91992 5L0.91992 9"
                        stroke="black"
                        strokeLinecap="square"
                      />{" "}
                    </svg>
                  </span>
                </h4>
                <ul>
                  <li>
                    <a href="/account/addresses">Địa chỉ giao hàng</a>
                  </li>
                  <li>
                    <a href="/account?view=info">Thông tin của tôi</a>
                  </li>
                  <li>
                    <a className="delete-account" href="javascript:void(0);">
                      Xoá tài khoản
                    </a>
                  </li>
                  <li>
                    <a href="/" onClick={handleClick}>
                      Đăng xuất
                    </a>
                  </li>
                </ul>
              </div>
            </div>{" "}
          </div>
          <div className="main-account">
            <Breadcrumb />
            <div className="point-account">
              <div className="point-avatar">
                <div className="customer-avatar">
                  <span>V</span>
                </div>
                <div className="customer-name">
                  <h3>{userName}</h3>
                  <a href="#" className="d-none">
                    Xem cấp độ thành viên/lợi ích
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      {" "}
                      <path
                        d="M6 3L10.5 7.5L6 12"
                        stroke="white"
                        strokeLinecap="square"
                      />{" "}
                    </svg>
                  </a>
                </div>
              </div>
              <div className="point-barcode">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={25}
                  height={24}
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  {" "}
                  <path
                    d="M21.5 9.42857L21.5 6L17.5 6"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="square"
                  />{" "}
                  <path
                    d="M7.5 6H3.5V9.42857"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="square"
                  />{" "}
                  <path
                    d="M7.5 18H3.5V14.5714"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="square"
                  />{" "}
                  <path
                    d="M21.5 14.5714L21.5 18L17.5 18"
                    stroke="white"
                    strokeWidth="1.2"
                    strokeLinecap="square"
                  />{" "}
                  <line
                    x1={6}
                    y1="14.5"
                    x2={6}
                    y2="9.5"
                    stroke="white"
                    strokeLinecap="square"
                  />{" "}
                  <line
                    x1={11}
                    y1="14.5"
                    x2={11}
                    y2="9.5"
                    stroke="white"
                    strokeLinecap="square"
                  />{" "}
                  <line
                    x1={16}
                    y1="14.5"
                    x2={16}
                    y2="9.5"
                    stroke="white"
                    strokeLinecap="square"
                  />{" "}
                  <line
                    x1="8.7"
                    y1="14.2"
                    x2="8.7"
                    y2="9.8"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />{" "}
                  <line
                    x1="13.7"
                    y1="14.2"
                    x2="13.7"
                    y2="9.8"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />{" "}
                  <line
                    x1="18.7"
                    y1="14.2"
                    x2="18.7"
                    y2="9.8"
                    stroke="white"
                    strokeWidth="1.6"
                    strokeLinecap="square"
                  />{" "}
                </svg>
                <span>Mã vạch thành viên</span>
              </div>
              <div className="point-info d-none">
                <div className="item-point-info">
                  <div className="point-number">9,999,999</div>
                  <div className="point-text">Số dặm</div>
                </div>
                <div className="item-point-info">
                  <div className="point-number">999,999</div>
                  <div className="point-text">Số điểm</div>
                </div>
                <div className="item-point-info">
                  <div className="point-number">999</div>
                  <div className="point-text">Phiếu mua hàng</div>
                </div>
              </div>
            </div>
            <div className="order-recent d-none">
              <div className="heading-account">
                <div className="title-heading">
                  Đơn hàng <span>(3 tháng gần nhất)</span>
                </div>
                <div className="view-all">
                  <a href="#">
                    <span>Xem thêm</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={7}
                      height={11}
                      viewBox="0 0 7 11"
                      fill="none"
                    >
                      {" "}
                      <path
                        d="M1 1L5.5 5.5L1 10"
                        stroke="black"
                        strokeLinecap="square"
                      />{" "}
                    </svg>
                  </a>
                </div>
              </div>
              <div className="list-status-order">
                <div className="item-status">
                  <label>0</label>
                  <span>Chờ xử lý</span>
                </div>
                <div className="item-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={6}
                    height={10}
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    {" "}
                    <path
                      d="M0.919922 1L4.91992 5L0.91992 9"
                      stroke="#787878"
                      strokeLinecap="square"
                    />{" "}
                  </svg>
                </div>
                <div className="item-status">
                  <label>0</label>
                  <span>Chuẩn bị giao hàng</span>
                </div>
                <div className="item-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={6}
                    height={10}
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    {" "}
                    <path
                      d="M0.919922 1L4.91992 5L0.91992 9"
                      stroke="#787878"
                      strokeLinecap="square"
                    />{" "}
                  </svg>
                </div>
                <div className="item-status">
                  <label>0</label>
                  <span>Đang giao</span>
                </div>
                <div className="item-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={6}
                    height={10}
                    viewBox="0 0 6 10"
                    fill="none"
                  >
                    {" "}
                    <path
                      d="M0.919922 1L4.91992 5L0.91992 9"
                      stroke="#787878"
                      strokeLinecap="square"
                    />{" "}
                  </svg>
                </div>
                <div className="item-status">
                  <label>0</label>
                  <span>Hoàn tất</span>
                </div>
              </div>
            </div>
            <div className="list-order">
              <div className="empty-order">
                <div className="empty-order-inner">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={64}
                    height={64}
                    viewBox="0 0 64 64"
                    fill="none"
                  >
                    {" "}
                    <path
                      d="M21.27 31.67C21.76 31.67 22.19 31.48 22.57 31.1C22.95 30.72 23.14 30.29 23.14 29.8C23.14 29.31 22.95 28.88 22.57 28.5C22.19 28.12 21.76 27.93 21.27 27.93C20.74 27.93 20.29 28.12 19.94 28.5C19.58 28.88 19.41 29.31 19.41 29.8C19.41 30.29 19.59 30.72 19.94 31.1C20.3 31.48 20.74 31.67 21.27 31.67ZM32.27 31.67C32.76 31.67 33.19 31.48 33.57 31.1C33.95 30.72 34.14 30.29 34.14 29.8C34.14 29.31 33.95 28.88 33.57 28.5C33.19 28.12 32.76 27.93 32.27 27.93C31.78 27.93 31.35 28.12 30.97 28.5C30.59 28.88 30.4 29.31 30.4 29.8C30.4 30.29 30.59 30.72 30.97 31.1C31.35 31.48 31.78 31.67 32.27 31.67ZM43.14 31.67C43.63 31.67 44.06 31.48 44.44 31.1C44.82 30.72 45.01 30.29 45.01 29.8C45.01 29.31 44.82 28.88 44.44 28.5C44.06 28.12 43.63 27.93 43.14 27.93C42.65 27.93 42.22 28.12 41.84 28.5C41.46 28.88 41.27 29.31 41.27 29.8C41.27 30.29 41.46 30.72 41.84 31.1C42.22 31.48 42.65 31.67 43.14 31.67ZM9 55.2V15.6C9 14.58 9.34 13.72 10.03 13.03C10.72 12.34 11.58 12 12.6 12H51.8C52.82 12 53.68 12.34 54.37 13.03C55.06 13.72 55.4 14.57 55.4 15.6V44.13C55.4 45.15 55.06 46.01 54.37 46.7C53.68 47.39 52.83 47.73 51.8 47.73H16.47L9 55.2ZM10.47 51.6L15.8 46.27H51.8C52.42 46.27 52.93 46.07 53.33 45.67C53.73 45.27 53.93 44.76 53.93 44.14V15.6C53.93 14.98 53.73 14.47 53.33 14.07C52.93 13.67 52.42 13.47 51.8 13.47H12.6C11.98 13.47 11.47 13.67 11.07 14.07C10.67 14.47 10.47 14.98 10.47 15.6V51.6Z"
                      fill="#D0D0D0"
                    />{" "}
                    <path
                      opacity="0.05"
                      d="M51.8007 42.2706H15.8007L10.4707 47.6006V51.6006L15.8007 46.2706H51.8007C52.4207 46.2706 52.9307 46.0706 53.3307 45.6706C53.7307 45.2706 53.9307 44.7606 53.9307 44.1406V40.1406C53.9307 40.7606 53.7307 41.2706 53.3307 41.6706C52.9307 42.0706 52.4207 42.2706 51.8007 42.2706Z"
                      fill="black"
                    />{" "}
                  </svg>
                  <span>Không có lịch sử đặt hàng trong 3 tháng gần nhất.</span>
                </div>
              </div>
            </div>
            <div className="icon-bottom-account">
              <div className="icon-bottom-account-inner">
                <div className="item-icon-account">
                  <a href="/account?view=wishlist">
                    <div className="media-icon-account">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={65}
                        height={64}
                        viewBox="0 0 65 64"
                        fill="none"
                      >
                        {" "}
                        <rect
                          x="0.5"
                          width={64}
                          height={64}
                          rx={32}
                          fill="#F8F8F8"
                        />{" "}
                        <g clipPath="url(#icon-account-1)">
                          {" "}
                          <path
                            d="M31.9388 44.7709C32.2501 45.0774 32.7499 45.0774 33.0612 44.7709L43.8308 34.1688C47.1231 30.9277 47.1231 25.6675 43.8308 22.4265C40.7266 19.3705 35.8046 19.2021 32.5 21.921C29.1954 19.2021 24.2734 19.3705 21.1692 22.4265C17.8769 25.6675 17.8769 30.9277 21.1692 34.1688L31.9388 44.7709Z"
                            fill="white"
                            stroke="black"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M30.7578 42.484L41.3885 31.9459C43.9186 29.4379 44.4307 25.687 42.9249 22.6758C43.0426 22.7783 43.1579 22.8849 43.2705 22.9958C46.2444 25.9235 46.2444 30.6702 43.2705 33.5979L32.501 44.2L30.7578 42.484Z"
                            fill="#E8E8E8"
                          />{" "}
                          <path
                            d="M23.9581 30.8165C22.6364 29.5153 22.6364 27.4057 23.9581 26.1045C24.5664 25.5057 25.3485 25.1824 26.1446 25.1348M26.4335 33.2175L25.8146 32.6172"
                            stroke="black"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />{" "}
                        </g>{" "}
                        <defs>
                          {" "}
                          <clipPath id="icon-account-1">
                            {" "}
                            <rect
                              width={52}
                              height={52}
                              fill="white"
                              transform="translate(6.5 6)"
                            />{" "}
                          </clipPath>{" "}
                        </defs>{" "}
                      </svg>
                    </div>
                    <span>Wishlist</span>
                  </a>
                </div>
                <div className="item-icon-account">
                  <a href="#">
                    <div className="media-icon-account">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={65}
                        height={64}
                        viewBox="0 0 65 64"
                        fill="none"
                      >
                        {" "}
                        <rect
                          x="0.5"
                          width={64}
                          height={64}
                          rx={32}
                          fill="#F8F8F8"
                        />{" "}
                        <g clipPath="url(#icon-account-2)">
                          {" "}
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M36.5058 33.1065H28.4942V27.2031L16.6875 37.165L28.4942 47.1269V41.2236H45.4855V33.1065H40.8798L36.5058 36.797V33.1065Z"
                            fill="#E8E8E8"
                          />{" "}
                          <path
                            d="M36.5058 33.1065H37.2058C37.2058 32.7199 36.8924 32.4065 36.5058 32.4065V33.1065ZM28.4942 33.1065H27.7942C27.7942 33.4931 28.1076 33.8065 28.4942 33.8065V33.1065ZM28.4942 27.2031H29.1942C29.1942 26.9307 29.0362 26.6831 28.7891 26.5683C28.5421 26.4535 28.2509 26.4925 28.0428 26.6681L28.4942 27.2031ZM16.6875 37.165L16.2361 36.63C16.0785 36.763 15.9875 36.9588 15.9875 37.165C15.9875 37.3712 16.0785 37.567 16.2361 37.7L16.6875 37.165ZM28.4942 47.1269L28.0428 47.6619C28.2509 47.8375 28.5421 47.8765 28.7891 47.7617C29.0362 47.6469 29.1942 47.3993 29.1942 47.1269H28.4942ZM28.4942 41.2236V40.5236C28.1076 40.5236 27.7942 40.837 27.7942 41.2236H28.4942ZM45.4855 41.2236V41.9236C45.8721 41.9236 46.1855 41.6102 46.1855 41.2236H45.4855ZM45.4855 33.1065H46.1855C46.1855 32.7199 45.8721 32.4065 45.4855 32.4065V33.1065ZM40.8798 33.1065V32.4065C40.7145 32.4065 40.5546 32.4649 40.4283 32.5715L40.8798 33.1065ZM36.5058 36.797H35.8058C35.8058 37.0694 35.9638 37.317 36.2109 37.4318C36.4579 37.5466 36.7491 37.5076 36.9572 37.332L36.5058 36.797ZM36.5058 32.4065H28.4942V33.8065H36.5058V32.4065ZM29.1942 33.1065V27.2031H27.7942V33.1065H29.1942ZM28.0428 26.6681L16.2361 36.63L17.1389 37.7L28.9456 27.7381L28.0428 26.6681ZM16.2361 37.7L28.0428 47.6619L28.9456 46.5919L17.1389 36.63L16.2361 37.7ZM29.1942 47.1269V41.2236H27.7942V47.1269H29.1942ZM28.4942 41.9236H45.4855V40.5236H28.4942V41.9236ZM46.1855 41.2236V33.1065H44.7855V41.2236H46.1855ZM45.4855 32.4065H40.8798V33.8065H45.4855V32.4065ZM40.4283 32.5715L36.0544 36.262L36.9572 37.332L41.3312 33.6415L40.4283 32.5715ZM37.2058 36.797V33.1065H35.8058V36.797H37.2058Z"
                            fill="black"
                          />{" "}
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M28.4942 30.8935V27.203L24.1202 30.8935H19.5145V22.7764H36.5058V16.8731L48.3125 26.835L36.5058 36.7969V30.8935H28.4942Z"
                            fill="white"
                          />{" "}
                          <path
                            d="M28.4942 30.8935H27.7942C27.7942 31.2801 28.1076 31.5935 28.4942 31.5935V30.8935ZM28.4942 27.203H29.1942C29.1942 26.9306 29.0362 26.683 28.7891 26.5682C28.5421 26.4534 28.2509 26.4924 28.0428 26.668L28.4942 27.203ZM24.1202 30.8935V31.5935C24.2855 31.5935 24.4454 31.5351 24.5717 31.4285L24.1202 30.8935ZM19.5145 30.8935H18.8145C18.8145 31.2801 19.1279 31.5935 19.5145 31.5935V30.8935ZM19.5145 22.7764V22.0764C19.1279 22.0764 18.8145 22.3898 18.8145 22.7764H19.5145ZM36.5058 22.7764V23.4764C36.8924 23.4764 37.2058 23.163 37.2058 22.7764H36.5058ZM36.5058 16.8731L36.9572 16.3381C36.7491 16.1625 36.4579 16.1235 36.2109 16.2383C35.9638 16.3531 35.8058 16.6007 35.8058 16.8731H36.5058ZM48.3125 26.835L48.7639 27.37C48.9215 27.237 49.0125 27.0412 49.0125 26.835C49.0125 26.6288 48.9215 26.433 48.7639 26.3L48.3125 26.835ZM36.5058 36.7969H35.8058C35.8058 37.0693 35.9638 37.3169 36.2109 37.4317C36.4579 37.5465 36.7491 37.5075 36.9572 37.3319L36.5058 36.7969ZM36.5058 30.8935H37.2058C37.2058 30.5069 36.8924 30.1935 36.5058 30.1935V30.8935ZM29.1942 30.8935V27.203H27.7942V30.8935H29.1942ZM28.0428 26.668L23.6688 30.3585L24.5717 31.4285L28.9456 27.738L28.0428 26.668ZM19.5145 31.5935H24.1202V30.1935H19.5145V31.5935ZM18.8145 22.7764V30.8935H20.2145V22.7764H18.8145ZM36.5058 22.0764H19.5145V23.4764H36.5058V22.0764ZM35.8058 16.8731V22.7764H37.2058V16.8731H35.8058ZM48.7639 26.3L36.9572 16.3381L36.0544 17.4081L47.8611 27.37L48.7639 26.3ZM36.9572 37.3319L48.7639 27.37L47.8611 26.3L36.0544 36.2619L36.9572 37.3319ZM35.8058 30.8935V36.7969H37.2058V30.8935H35.8058ZM28.4942 31.5935H36.5058V30.1935H28.4942V31.5935Z"
                            fill="black"
                          />{" "}
                        </g>{" "}
                        <defs>
                          {" "}
                          <clipPath id="icon-account-2">
                            {" "}
                            <rect
                              width={52}
                              height={52}
                              fill="white"
                              transform="translate(6.5 6)"
                            />{" "}
                          </clipPath>{" "}
                        </defs>{" "}
                      </svg>
                    </div>
                    <span>Huỷ/Đổi/Trả</span>
                  </a>
                </div>
                <div className="item-icon-account">
                  <a href="/account?view=info">
                    <div className="media-icon-account">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={65}
                        height={64}
                        viewBox="0 0 65 64"
                        fill="none"
                      >
                        {" "}
                        <rect
                          x="0.5"
                          width={64}
                          height={64}
                          rx={32}
                          fill="#F8F8F8"
                        />{" "}
                        <g clipPath="url(#icon-account-3)">
                          {" "}
                          <rect
                            x="18.3"
                            y="25.8"
                            width="28.4"
                            height="21.4"
                            rx="4.2"
                            fill="white"
                            stroke="black"
                            strokeWidth="1.6"
                          />{" "}
                          <path
                            d="M26.5 25V22.5C26.5 18.9101 29.4101 16 33 16H33.3C36.2257 16 38.6781 18.0265 39.3301 20.7524"
                            stroke="black"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />{" "}
                          <circle
                            cx="32.4993"
                            cy="34.3098"
                            r="3.30985"
                            fill="#E8E8E8"
                            stroke="black"
                            strokeWidth="1.4"
                            strokeLinecap="square"
                          />{" "}
                          <path
                            d="M40.5 46.5V46.5C40.5 43.7386 38.2614 41.5 35.5 41.5H29.5C26.7386 41.5 24.5 43.7386 24.5 46.5V46.5"
                            stroke="black"
                            strokeWidth="1.4"
                            strokeLinecap="round"
                          />{" "}
                        </g>{" "}
                        <defs>
                          {" "}
                          <clipPath id="icon-account-3">
                            {" "}
                            <rect
                              width={52}
                              height={52}
                              fill="white"
                              transform="translate(6.5 6)"
                            />{" "}
                          </clipPath>{" "}
                        </defs>{" "}
                      </svg>
                    </div>
                    <span>Quản lý tài khoản</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default accountUser;
