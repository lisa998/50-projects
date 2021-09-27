import { styled } from "@material-ui/styles";
import { useState } from "react";
import React from "react";

export default function BackgroundSlider() {
  const bgURL = [
    "https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day.jpg",
    "https://images.theconversation.com/files/400983/original/file-20210517-19-10xgdhs.jpg?ixlib=rb-1.1.0&rect=22%2C550%2C6996%2C3492&q=45&auto=format&w=1356&h=668&fit=crop",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/black-and-white-cat-on-ground-.jpeg?0Gthf4YOsNtIls5FHGw6xcQmyrsUdxFs&size=1200:675",
    "https://cdn.marriottnetwork.com/uploads/sites/21/2019/07/the-algonquin-hotel-autograph-collection-cat-02-1440x900.jpg",
    "https://images.squarespace-cdn.com/content/v1/5fce505a09a2521ce36ff873/1608257196942-V461FTP62SR89S8NSGCW/image-asset.jpeg",
  ];
  const [pic, setPic] = useState(0);

  return (
    <Body>
      <Pic bg={bgURL[pic]} />
      <Mask />
      <Mask right={true} />
      <Mask2 />
      <Mask2 top={true} />
      <Btn left={true} onClick={() => setPic((pic - 1) % 5)}>
        <i class="fas fa-arrow-left"></i>
      </Btn>
      <Btn onClick={() => setPic((pic + 1) % 5)}>
        <i class="fas fa-arrow-right"></i>
      </Btn>
    </Body>
  );
}
const Body = styled("div")({
  height: "80vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  position: "relative",
  color: "white",
  fontSize: 20,
});
const Pic = styled("div")({
  height: "100%",
  width: "100%",
  backgroundImage: (props) => `url(${props.bg})`,
  backgroundPosition: "center",
});
const Mask = styled("div")({
  backgroundColor: "black",
  opacity: 0.5,
  position: "absolute",
  width: "15%",
  height: "100%",
  right: (props) => (props.right ? 0 : "85%"),
});
const Mask2 = styled("div")({
  backgroundColor: "black",
  opacity: 0.5,
  position: "absolute",
  height: "10%",
  width: "70%",
  top: (props) => (props.top ? 0 : "90%"),
});
const Btn = styled("div")({
  width: 70,
  height: 80,
  position: "absolute",
  border: "2px solid white",
  top: "50%",
  fontSize: "xx-large",
  transform: (props) =>
    props.left ? "translateY(-50%) translateX(-100%)" : "translateY(-50%)",
  left: (props) => (props.left ? "15%" : "85%"),
  zIndex: 3,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});
