import React from "react";

const Notification = ({ title, body, icon, onClick, onClose }) => {
  return (
    <div className="notification" onClick={onClick}>
      {icon && <img src={icon} alt="Notification Icon" />}
      <div className="notification-content">
        <h3>{title}</h3>
        <p>{body}</p>
      </div>
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Notification;