import React from "react";
import "./notification.css";

const Notification = ({ showNotify }) => {
  return (
    <div className={`notification-container ${showNotify ? "show" : ""}`}>
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
