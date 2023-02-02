import React from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareButtonModal = ({ smShow, setSmShow, newsId }) => {
  const shareUrl = newsId
    ? `https://login-various-way.firebaseapp.com/news/${newsId}`
    : "https://login-various-way.firebaseapp.com/home";

  return (
    <Modal size="md" show={smShow} onHide={() => setSmShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">Share Now</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex align-items-center justify-content-between">
        <CopyToClipboard text={shareUrl}>
          <Button variant="outline-dark">Copy Link</Button>
        </CopyToClipboard>
        <FacebookShareButton url={shareUrl}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <FacebookMessengerShareButton url={shareUrl}>
          <FacebookMessengerIcon size={32} round />
        </FacebookMessengerShareButton>
        <WhatsappShareButton url={shareUrl}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
        <TelegramShareButton url={shareUrl}>
          <TelegramIcon size={32} round />
        </TelegramShareButton>
        <TwitterShareButton url={shareUrl}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
      </Modal.Body>
    </Modal>
  );
};

export default ShareButtonModal;
