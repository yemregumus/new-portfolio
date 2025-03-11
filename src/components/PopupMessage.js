import React from "react";

const PopupMessage = ({ message, onClose }) => {
  return (
    <div className="popup-overlay">
      <div className="popup-message">
        <p>{message}</p>
        <button classname="popup-btn" type="submit" onClick={onClose}>
          OK
        </button>
      </div>
    </div>
  );
};

export default PopupMessage;
