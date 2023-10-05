"use client";
import { Nav, Navbar as BootstrapNavbar } from "react-bootstrap";
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
        <BootstrapNavbar.Brand href="#" className="col-sm-2">
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
              <Nav.Link href="#home">QUẦN ÁO</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#features">MŨ NÓN</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#pricing">GIÀY DÉP</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#features">TÚI VÍ</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#pricing">PHỤ KIỆN</Nav.Link>
            </Nav.Item>
          </Nav>
        </BootstrapNavbar.Collapse>
        <div className="icon ms-auto fs-5 d-flex position-absolute end-0 pe-1 pe-lg-5">
          <i className="fa-solid fa-magnifying-glass p-2"></i>
          <i className="fa-solid fa-bag-shopping p-2"></i>
          <i className="fa-regular fa-heart p-2"></i>
          <i className="fa-solid fa-user-tie p-2"></i>
        </div>
      </BootstrapNavbar>
    </section>
  );
};
export default Navbar;
