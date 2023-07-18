import React from "react";
import "./modal.css";

function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div>
        Modal
      </div>
      <div>
        <p onClick={onClose}>X</p>
      </div>
    </>
  );
}

export default Modal;
