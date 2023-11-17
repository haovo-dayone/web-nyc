"use client";
import Link from "next/link";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001/api";
const Navbar = () => {
  return (
    <section className="header">
      <BootstrapNavbar
        expand="lg"
        bg="light"
        // className="position-relative"
        className="justify-content-start"
        data-bs-theme="light"
      >
        {/* <div > */}
        <BootstrapNavbar.Toggle
          aria-controls="basic-navbar-nav"
          // className="fas fa-bars fa-lg text-primary"
          className="col-sm-2"
        />
        <BootstrapNavbar.Brand href="/" className="col-sm-2">
          <img
            src="/assets/img/logo/logo2.svg"
            className="image-fluid"
            alt="logo-website"
          ></img>
        </BootstrapNavbar.Brand>
        {/* </div> */}
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text">
            <Nav.Item>
              <Link className="nav-link" href="/collection/apparel">
                QUẦN ÁO
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" href="/collection/cap">
                MŨ NÓN
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" href="/collection/shoes">
                GIÀY DÉP
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" href="/collection/bag">
                TÚI VÍ
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" href="/collection/accessories">
                PHỤ KIỆN
              </Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
        <div className="icon ms-auto fs-5 d-flex position-absolute end-0 pe-1 pe-lg-5">
          <i className="fa-solid fa-magnifying-glass p-2"></i>
          <Link href="/cart" className="text-dark">
            <i className="fa-solid fa-bag-shopping p-2"></i>
          </Link>
          <i className="fa-regular fa-heart p-2"></i>
          <Link href="/account/login" className="text-dark">
            <i className="fa-solid fa-user-tie p-2"></i>
          </Link>
        </div>
      </BootstrapNavbar>
    </section>
  );
};
export default Navbar;
