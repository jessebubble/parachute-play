import React, { useState } from "react";
import { Text } from "@chakra-ui/react";

const Notification = ({ showNotify }) => {
  const [isShowing, setIsShowing] = useState(false);

  const toggleNotify = () => {
    setIsShowing(!isShowing);
  };

  if (!isShowing) {
    toggleNotify();
    return <Text>You have already entered this letter!</Text>;
  }
};

export default Notification;
