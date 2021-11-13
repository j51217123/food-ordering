import React from "react";
import Portal from "../components/Portal";

import { ReactComponent as CloseIcon } from "../images/CloseIcon.svg";

const Modal = ({ isOpenModal, data }) => {
  const handleCloseModal = (isOpenModal) => {};

  return (
    <Portal customRootId={"add-to-cart-portal-root"}>
      <div className="modalBackground">
        <div className="modal-mask"></div>
        <div className="modal-container">
          <button onClick={handleCloseModal} className="modal-close-btn">
            <CloseIcon className="close-icon" />
          </button>
          <div className="title">
            <h1>Are you Sure Want To Continue ? </h1>
          </div>
          <div className="body">
            <p>The next page is awesome!</p>
          </div>
          <div className="footer">
            <button onClick={handleCloseModal}>Cancel</button>
            <button>Continue</button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Modal;
