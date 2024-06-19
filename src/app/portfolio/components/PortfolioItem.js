"use client";

import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Button from "./Button";
import Image from "next/image";

const PortfolioItem = ({ item }) => {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return (
    <div className="portfolio_item_wrap">
      <div onClick={onOpenModal} className="portfolio_item">
        <Image
          src={item.images[0].url}
          alt={item.name}
          width="240"
          height="240"
        />
        <div className="item_overlay">
          <h3>{item.name}</h3>
          <p className="expand_text">View details</p>
        </div>
      </div>
      <Modal
        little
        showCloseIcon={false}
        classNames={{ modal: "portfolio_modal_container" }}
        open={open}
        onClose={onCloseModal}
      >
        <Image src={item.images[1].url} alt="" width="700" height="366" />
        <div className="portfolio_description_content">
          <h3>{item.name}</h3>
          <h4>{item.type}</h4>
          <p>{item.description}</p>
        </div>
        <Button clickHandler={onCloseModal}>Close</Button>
      </Modal>
    </div>
  );
};

export default PortfolioItem;
