import { styled } from "@material-ui/core";

export default function RandomImageFeed() {
  const arr = [];
  const url = "https://source.unsplash.com/random/";
  const randomSize = () => Math.floor(Math.random() * 10) + 300;
  for (let i = 0; i < 15; i++) {
    arr.push(`${url}${randomSize()}x${randomSize()}`);
  }
  return (
    <Body>
      <h1>Random Image Feed</h1>
      <div style={{ maxWidth: 1000 }}>
        {arr.map((ele) => (
          <Img src={ele} alt="" />
        ))}
      </div>
    </Body>
  );
}
const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "85vh",
  alignItems: "center",
  fontFamily: "'Montserrat', sans-serif",
  overflow: "auto",
});
const Img = styled("img")({
  width: 300,
  height: 300,
  objectFit: "cover",
  margin: 10,
});
