import { Button, Modal } from "react-bootstrap";

const ModalVideo = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="p-0"
    >
      {/* <Modal.Header closeButton></Modal.Header> */}
      <Modal.Body className="p-0">
        <iframe
          id="fancybox-frame1698999152993"
          name="fancybox-frame1698999152993"
          className="fancybox-iframe"
          allowFullScreen="allowfullscreen"
          allow="autoplay; fullscreen"
          src="https://www.youtube-nocookie.com/embed/2vZgBIwXOUI?autoplay=1&autohide=1&fs=1&rel=0&hd=1&wmode=transparent&enablejsapi=1&html5=1"
          scrolling="no"
        />
      </Modal.Body>
    </Modal>
  );
};
export default ModalVideo;
