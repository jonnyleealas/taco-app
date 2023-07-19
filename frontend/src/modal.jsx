import React from "react";
import "./modal.css";

// eslint-disable-next-line react/prop-types
function Modal({ isOpen, onClose, children }) {
  return (
    <div>
      {isOpen ? (
        <div className="overlay">
          <div className="overlay_background" onClick={onClose} onKeyDown="" role="button" tabIndex="0">
            <div className="overlay_container">
              <div className="overlay_controls">
                <button className="overlay_close" type="button" onClick={onClose}>
                  X
                </button>
              </div>
              {children}
            </div>
          </div>
        </div>
      ) : null }
    </div>
  );
}

export default Modal;
