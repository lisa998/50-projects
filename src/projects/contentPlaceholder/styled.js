import { styled } from "@material-ui/styles";

export const Body = styled("div")({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",

  position: "relative",
});
export const Loading = styled("div")({
  backgroundSize: "200% 100%",
  background:
    "linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%)",
  transition: (props) => props.transition,
  transform: (props) => props.transform,
  width: (props) => props.width,
  height: (props) => props.height,
});
export const LoadingBox = styled("div")({
  width: (props) => props.width,
  height: (props) => props.height,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "rgba(246,246,246,1)",
  backgroundImg: (props) => `url(${props.src})`,
  borderRadius: 20,
});
export const Img = styled("div")({
  backgroundImage:
    "url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80')",
  backgroundSize: "cover",
  width: 350,
  height: 200,
});
export const Card = styled("div")({
  width: 350,
  height: 422,
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 2px 10px rgb(0 0 0 / 20%)",
});
export const StyledInfo = styled("div")({
  padding: 30,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
export const Author = styled("div")({
  display: "flex",
  alignItems: "center",
});
