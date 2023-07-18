import React from "react";
import "./modal.css";

function Modal({ open }) {
  if (!open) return null;
  return (
    <div>Modal</div>
  );
}

export default Modal;
