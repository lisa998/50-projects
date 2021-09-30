import { styled } from "@material-ui/core";

export const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  fontFamily: "'Roboto', sans-serif",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
});

export const Div = styled("div")({
  width: 300,
  boxShadow: "3px 3px 10px rgb(0 0 0 / 20%)",
  borderRadius: 5,
  overflow: "hidden",
});
export const Users = styled("div")({
  width: "100%",
  height: 400,
  overflowY: "scroll",
});
export const StyledUser = styled("div")({
  width: "100%",
  height: 105,
  padding: 20,
  display: (props) => (props.hide ? "none" : "flex"),
  borderBottom: "1px solid #eee",
});
export const SearchDiv = styled("div")({
  width: "100%",
  backgroundColor: "#3e57db",
  color: "white",
  padding: "30px 20px",
});
export const Input = styled("input")({
  backgroundColor: "rgba(0, 0, 0, 0.3)",
  border: 0,
  borderRadius: 50,
  color: "#fff",
  fontSize: 14,
  padding: "10px 15px",
  width: "100%",
  "&:focus-visible": {
    outline: "none",
  },
});
