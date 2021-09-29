import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  position: "relative",
  height: "90vh",
  overflow: "auto",
  fontFamily: "'Open Sans', sans-serif",
});
export const NavBox = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  position: "sticky",
  backgroundColor: (props) => (props.white ? "#222222" : "white"),
  top: 0,
  zIndex: 3,
  transition: "all 0.2s ease-in-out",
});
export const StyledNav = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  maxWidth: 1000,
  width: 1000,
  backgroundColor: (props) => (props.white ? "#222222" : "white"),
  color: (props) => (props.white ? "white" : "black"),
  transition: "all 0.2s ease-in-out",
});
export const NavFont = styled("h3")({
  fontSize: (props) => (props.fontSize ? props.fontSize : 20),
  padding: (props) => (props.white ? "35px 15px" : "20px 15px"),
  transition: "0.2s ease-in-out",
  cursor: "pointer",
  "&:hover": {
    color: "#c0392b",
  },
  margin: 0,
});
export const Img = styled("div")({
  backgroundImage:
    "url('https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')",
  width: "100%",
  height: "80vh",
  backgroundSize: "cover",
  position: "relative",
  top: 230,
  "&::before": {
    content: '""',
    position: "absolute",
    backgroundColor: "black",
    opacity: "0.5",
    width: "100%",
    height: "100%",
  },
});
export const PicFont = styled("p")({
  zIndex: 2,
  color: "white",
  position: "absolute",
  top: (props) => props.top,
  fontSize: (props) => props.fontSize,
  fontWeight: (props) => props.fontWeight,
});
