import React, { useState } from "react";
import { Tooltip } from "@chakra-ui/react";

const Notification = ({ showNotify }) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleNotify = () => {
    setIsShowing(!isShowing);
  };

  if (!isShowing) {
    toggleNotify();
    return <Tooltip>You have already entered this letter!</Tooltip>;
  }
};

export default Notification;
