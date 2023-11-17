"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { Breadcrumb as BootstrapBreadcrumb } from "react-bootstrap";

const routeNames = {
  "/": "Trang Chủ",
  "/collection": "Danh Mục",
  "/apparel": "Quần Áo",
  "/cap": "Mũ Nón",
  "/cart": "Giỏ Hàng",
  "/accessories": "Phụ Kiện",
  "/shoes": "Giày Dép",
  "/bag": "Túi Ví",
  "/account": "Tài Khoản",
  "/register": "Đăng Ký",
  "/forgetpassword": "Quên Mật Khẩu",
  "/accountUser": "Tài Khoản Người dùng",
};

const Breadcrumb = () => {
  // const location = usePath();
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    setPaths(window.document.location.pathname.split("/"));
  }, []);

  return (
    <BootstrapBreadcrumb className="text-secondary">
      {paths.map((p, index) => (
        <BootstrapBreadcrumb.Item href={`/${p}`} key={index}>
          {routeNames[`/${p}`]}
        </BootstrapBreadcrumb.Item>
      ))}
      {/* <BootstrapBreadcrumb.Item href="/">Trang Chủ</BootstrapBreadcrumb.Item>
      <BootstrapBreadcrumb.Item href="#">Danh Mục</BootstrapBreadcrumb.Item>
      <BootstrapBreadcrumb.Item active>Quần Áo</BootstrapBreadcrumb.Item> */}
    </BootstrapBreadcrumb>
  );
};
export default Breadcrumb;
