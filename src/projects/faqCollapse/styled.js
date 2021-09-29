import { styled } from "@material-ui/core";

export const Body = styled("div")({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "'Muli', sans-serif",
});
export const Block = styled("div")({
  position: "relative",
  border: "2px solid #e9e9e9",
  borderRadius: 20,
  boxShadow: "5px 5px 5px 0px rgba(143,143,143,1)",
  margin: 10,
  padding: "20px 30px",
  width: 600,
  backgroundImage:
    "url('https://thinkmarketingmagazine.com/wp-content/uploads/2020/11/2018-08-communication-builds-housekeeping-professionals-detail-1200x627-1.jpg')",
  backgroundSize: "cover",
  zIndex: 2,
  "&::before": {
    content: '""',
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: (props) =>
      !props.open ? "#f0f0f0" : "rgb(255 255 255 / 40%)",
    zIndex: -1,
    top: 0,
    right: 0,
    borderRadius: 20,
    transition: "all 0.1s ease-in",
  },
});
export const Btn = styled("div")({
  borderRadius: "50%",
  color: "white",
  backgroundColor: "#9fa4a8",
  width: 30,
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "absolute",
  top: 30,
  right: 30,
  zIndex: 5,
  "&:hover": {
    cursor: "pointer",
  },
});
