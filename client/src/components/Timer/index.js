import React, { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setTimer((seconds) => seconds + 1);
      }, 1000);
    } else if (!isActive && timer !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timer]);
  return (
    <Flex justify={"flex-end"} marginRight={"500"}>
      <div>Time: {timer}</div>
    </Flex>
  );
};

export default Timer;
