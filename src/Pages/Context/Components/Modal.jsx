import React from "react";
import "./Modal.scss";

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return (
    <>
      <div className="overlay"></div>
      <div className="modal">
        {children}
        <div className="wrapper">
          <button className="exitBtn" onClick={onClose}>
            x
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
