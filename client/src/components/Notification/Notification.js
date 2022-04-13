import React from "react";
import "./notification.css";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Notification = ({ showNotify }) => {
  return (
    <Alert
      className={`notification-container ${showNotify ? "show" : ""}`}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <AlertIcon />
      <AlertTitle>You have already entered this letter</AlertTitle>
    </Alert>
  );
};

export default Notification;
