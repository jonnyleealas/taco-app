import React from "react";
import "./modal.css";

function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <div className="modalContainer">
      <div>
        Modal
      </div>
      <div>
        <p className="x" onClick={onClose}>X</p>
      </div>
    </div>
  );
}

export default Modal;