import React from "react";
import "./modal.css";

function Modal({ open, onClose }) {
  if (!open) return null;
  return (

    <div className="overlay" onClick={onClose} role="presentation">
      <div>
        Header
      </div>
      <div className="modalContainer">
        <div className="modalDottedLine">
        {/* add two row grid to flex x to one end and center bottom button */}
          <div>
            <p className="x" onClick={onClose} role="presentation">X</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
