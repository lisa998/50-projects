import { useState } from "react";
import { Body, Box, MessageContainer } from "./styled";

export default function ToastNotification() {
  const message = [
    { content: "Success", color: "green" },
    { content: "Error", color: "red" },
    { content: "Information", color: "rebeccapurple" },
  ];
  const [toast, setToast] = useState([]);
  const newMessage = () => {
    let random = Math.floor(Math.random() * 3);
    setToast([...toast, message[random]]);
    setTimeout(() => {
      setToast((toast) => toast.filter((ele, i) => i !== 0));
    }, 3000);
  };

  return (
    <Body>
      <Box btn={1} onClick={newMessage}>
        Show Notification
      </Box>
      <MessageContainer>
        {toast.map((ele, i) => (
          <Box color={ele.color} key={i}>
            {ele.content}
          </Box>
        ))}
      </MessageContainer>
    </Body>
  );
}
