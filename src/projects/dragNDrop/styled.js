import { styled } from "@material-ui/styles";
export const Body = styled("div")({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  minWidth: 860,
  backgroundColor: "rgb(63 81 181 / 20%)",
});
export const StyledContainer = styled("div")({
  width: 150,
  height: 150,
  margin: 10,
  border: "3px solid black",
  position: "relative",
});

export const Pic = styled("div")({
  backgroundImage: "url('https://source.unsplash.com/random/150x150')",
  height: 144,
  width: 144,
  cursor: "pointer",
  position: "relative",
});
