import React from "react";
import Portal from "../Portal/Portal";

import { ReactComponent as CloseIcon } from "../../images/CloseIcon.svg";

const Modal = ({ children, isVisible, onClose }) => {
  const handleCloseModal = () => {
    onClose && onClose();
  };

  return (
    isVisible && (
      <Portal customRootId={"add-to-cart-portal-root"}>
        <div className="modalBackground">
          <div className="modal-mask"></div>
          <div className="modal-container">
            <button onClick={handleCloseModal} className="modal-close-btn">
              <CloseIcon className="close-icon" />
            </button>
            {children}
          </div>
        </div>
      </Portal>
    )
  );
};

export default Modal;
