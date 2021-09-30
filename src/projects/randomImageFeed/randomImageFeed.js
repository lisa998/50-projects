import { Body, Img } from "./styled";

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
        {arr.map((ele, i) => (
          <Img src={ele} alt="" key={i} />
        ))}
      </div>
    </Body>
  );
}
