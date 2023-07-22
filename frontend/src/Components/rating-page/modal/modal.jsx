import React from "react";
import "./modal.css";

function Modal({ open, onClose }) {
  if (!open) return null;
  return (

    <div className="overlay" onClick={onClose} role="presentation">
      <div className="modalContainer">
        <div className="modalDottedLine">
          <div className="x-container">
            <p className="x" onClick={onClose} role="presentation">X</p>
          </div>
          <div className="drag-drop-container">
            <p>Drag and drop photos here</p>
          </div>
          <div className="or">
            <p>or</p>
          </div>
          <div className="modal-button-container">
            <button className="modal-button" type="button">Browse Files</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
