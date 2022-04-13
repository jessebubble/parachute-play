import React from "react";
import "./notification.css";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

const Notification = ({ showNotify }) => {
  return (
    <div className={`notification-container ${showNotify ? "show" : ""}`}>
      <Alert alignItems="center" justifyContent="center" textAlign="center">
        <AlertIcon />
        <AlertTitle>You have already entered this letter</AlertTitle>
      </Alert>
    </div>
  );
};

export default Notification;
