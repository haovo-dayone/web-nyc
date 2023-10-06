"use client";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { Breadcrumb as BootstrapBreadcrumb } from "react-bootstrap";

const routeNames = {
  "/": "Trang Chủ",
  "/collection": "Danh Mục",
  "/apparel": "Quần Áo",
  "/cap": "Mũ nón",
  "/cart": "Giỏ hàng",
};

const Breadcrumb = () => {
  // const location = usePath();
  const [paths, setPaths] = useState([]);

  useEffect(() => {
    setPaths(window.document.location.pathname.split("/"));
  }, []);

  return (
    <BootstrapBreadcrumb className="text-secondary">
      {paths.map((p) => (
        <BootstrapBreadcrumb.Item href={`/${p}`}>
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
