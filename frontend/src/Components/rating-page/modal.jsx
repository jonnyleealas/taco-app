import React from "react";
import "./modal.css";

function Modal({ open, onClose }) {
  if (!open) return null;
  return (

    <div className="overlay">
      <div className="modalContainer">
        <div className="modalDottedLine">
          <div>
            <p className="x" onClick={onClose}>X</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
