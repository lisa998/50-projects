import { styled } from "@material-ui/styles";
export const Body = styled("div")({
  position: "relative",
  width: "80vw",
  height: "80vh",
});
export const Pic = styled("div")({
  backgroundImage:
    "url('https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=980:*')",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  filter: (props) => `blur(${props.blur}px)`,
  height: "100%",
  width: "100%",
  zIndex: -1,
});

export const H1 = styled("h1")({
  color: "#fff03b",
  opacity: (props) => props.opacity,
  position: "relative",
  transform: "translate(0%, -50%)",
  top: "-50%",
  left: "50%",
  fontSize: 40,
});
