// src/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>News</h2>
        <p>Check out the latest offers</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Modal;
