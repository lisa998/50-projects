import { useState } from "react";
import React from "react";
import { Body, Pic, Btn, SilderContainer, Slider } from "./styled";

export default function BackgroundSlider() {
  const bgURL = [
    "https://nationaltoday.com/wp-content/uploads/2020/08/international-cat-day.jpg",
    "https://images.theconversation.com/files/400983/original/file-20210517-19-10xgdhs.jpg?ixlib=rb-1.1.0&rect=22%2C550%2C6996%2C3492&q=45&auto=format&w=1356&h=668&fit=crop",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/black-and-white-cat-on-ground-.jpeg?0Gthf4YOsNtIls5FHGw6xcQmyrsUdxFs&size=1200:675",
    "https://cdn.marriottnetwork.com/uploads/sites/21/2019/07/the-algonquin-hotel-autograph-collection-cat-02-1440x900.jpg",
    "https://images.squarespace-cdn.com/content/v1/5fce505a09a2521ce36ff873/1608257196942-V461FTP62SR89S8NSGCW/image-asset.jpeg",
  ];
  const [pic, setPic] = useState(0);
  const prev = () => {
    if (pic === 0) {
      setPic(4);
    } else {
      setPic((pic) => (pic - 1) % 5);
    }
  };
  return (
    <Body>
      <Pic bg={bgURL[pic]} />
      <Btn left={1} onClick={prev}>
        <i className="fas fa-arrow-left"></i>
      </Btn>
      <Btn onClick={() => setPic((pic + 1) % 5)}>
        <i className="fas fa-arrow-right"></i>
      </Btn>
      <SilderContainer>
        {bgURL.map((ele, i) => (
          <Slider bg={bgURL[i]} key={i} show={+(pic === i)} />
        ))}
      </SilderContainer>
    </Body>
  );
}
