import { Carousel } from "react-bootstrap";
import ModalVideo from "./ModalVideo";
import { useState } from "react";

const Video = () => {
  const [isShowing, setIsShowing] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsShowing(true);
  };
  return (
    <section className="video">
      <div className="container ">
        <div>
          <h3>Video</h3>
        </div>
        <Carousel interval={null}>
          <Carousel.Item>
            <a
              className="video-source"
              onClick={handleClick}
              data-fancybox=""
              href="https://www.youtube.com/watch?v=t6VC3jXSHjw"
              aria-label="Video"
            >
              <img
                src="https://file.hstatic.net/200000642007/file/thumbvideo3_1920x1080_3489b6f9ad9140eebc5696783d0a46b8.jpg"
                alt="image-video"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <circle
                  opacity="0.6"
                  cx="40"
                  cy="40"
                  r="40"
                  fill="black"
                ></circle>
                <path
                  d="M55.0101 40.3998L32.6001 55.4946L32.6 25.305L55.0101 40.3998Z"
                  stroke="white"
                  stroke-width="2"
                ></path>
              </svg>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              data-fancybox=""
              href="https://www.youtube.com/watch?v=2vZgBIwXOUI"
              className="video-source"
              aria-label="Video"
              onClick={handleClick}
            >
              <img
                src="https://file.hstatic.net/1000284478/file/thumbvideo3_1920x1080__1__9c6a8cbc5a574f0ca0a98cf3e648b470.jpg"
                alt="image-video"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <circle
                  opacity="0.6"
                  cx="40"
                  cy="40"
                  r="40"
                  fill="black"
                ></circle>
                <path
                  d="M55.0101 40.3998L32.6001 55.4946L32.6 25.305L55.0101 40.3998Z"
                  stroke="white"
                  stroke-width="2"
                ></path>
              </svg>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a
              data-fancybox=""
              href="https://www.youtube.com/watch?v=9wnGLdVeTVU"
              className="video-source"
              aria-label="Video"
              onClick={handleClick}
            >
              <img
                src="https://file.hstatic.net/200000642007/file/video2_1920x1080-min_85a3cfd528564573975e60a8375c3cc9.jpg"
                alt="image video"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <circle
                  opacity="0.6"
                  cx="40"
                  cy="40"
                  r="40"
                  fill="black"
                ></circle>
                <path
                  d="M55.0101 40.3998L32.6001 55.4946L32.6 25.305L55.0101 40.3998Z"
                  stroke="white"
                  stroke-width="2"
                ></path>
              </svg>
            </a>
          </Carousel.Item>
        </Carousel>
        <ModalVideo show={isShowing} onHide={() => setIsShowing(false)} />
      </div>
    </section>
  );
};
export default Video;
