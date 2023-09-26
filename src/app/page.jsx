"use client";
import NewCollection from "@/home/components/NewCollection";
import { Carousel, Container, Nav, Navbar } from "react-bootstrap";
import "@/home/styles/index.scss";

const Home = () => {
  return (
    <>
      <section className="header">
        <Navbar
          expand="lg"
          bg="light"
          // className="position-relative"
          className="justify-content-start"
          data-bs-theme="light"
        >
          {/* <div > */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            // className="fas fa-bars fa-lg text-primary"
            className="col-sm-2"
          />
          <Navbar.Brand href="#" className="col-sm-2">
            <img
              src="/assets/img/logo/logo2.svg"
              className="image-fluid"
              alt="logo-website"
            ></img>
          </Navbar.Brand>
          {/* </div> */}
          <Navbar.Collapse id="basic-navbar-nav">
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
          </Navbar.Collapse>
          <div className="icon ms-auto fs-5 d-flex position-absolute end-0 pe-1 pe-lg-5">
            <i className="fa-solid fa-magnifying-glass p-2"></i>
            <i className="fa-solid fa-bag-shopping p-2"></i>
            <i className="fa-regular fa-heart p-2"></i>
            <i className="fa-solid fa-user-tie p-2"></i>
          </div>
        </Navbar>
      </section>
      <section className="carousel">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src="/assets/img/logo/carousel1.webp"></img>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src="/assets/img/logo/carousel2.webp"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/assets/img/logo/carousel3.webp"></img>
          </Carousel.Item>
        </Carousel>
      </section>
      <NewCollection />
    </>
  );
};

export default Home;
