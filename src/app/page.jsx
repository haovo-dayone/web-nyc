"use client";
import NewCollection from "@/home/components/NewCollection";
import { Carousel, Container } from "react-bootstrap";
import "@/home/styles/index.scss";
import BestSelling from "@/home/components/BestSelling";
import Video from "@/home/components/Video";

const Home = () => {
  return (
    <>
      <section className="carousel">
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src="/assets/img/carousel/carousel1.webp"></img>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img src="/assets/img/carousel/carousel2.webp"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src="/assets/img/carousel/carousel3.webp"></img>
          </Carousel.Item>
        </Carousel>
      </section>
      <NewCollection />
      <BestSelling />
      <Video />
    </>
  );
};

export default Home;
