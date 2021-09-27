import { styled } from "@material-ui/styles";
import { useState } from "react";

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
      <Box btn={true} onClick={newMessage}>
        Show Notification
      </Box>
      <MessageContainer>
        {toast.map((ele) => (
          <Box color={ele.color}>{ele.content}</Box>
        ))}
      </MessageContainer>
    </Body>
  );
}

const Body = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  width: "100%",
  height: "80vh",
  flexDirection: "column",
  backgroundColor: "rebeccapurple",
  position: "relative",
  fontFamily: "'Poppins', sans-serif",
});
const Box = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  padding: 18,
  fontSize: 16,
  backgroundColor: "white",
  color: (props) => (props.color ? props.color : "rebeccapurple"),
  fontWeight: 700,
  borderRadius: 5,
  margin: 20,
  cursor: (props) => (props.btn ? "pointer" : null),
  "&:active": {
    transform: (props) => (props.btn ? "scale(0.98)" : null),
  },
});
const MessageContainer = styled("div")({
  position: "absolute",
  bottom: 20,
  right: 20,
  display: "flex",
  flexDirection: "column",
});
