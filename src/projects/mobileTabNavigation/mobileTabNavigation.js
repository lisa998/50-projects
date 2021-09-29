import React from "react";
import { useState } from "react";
import { Body, Phone, Img, StyledBtn, Icon } from "./styled";

export default function MobileTabNavigation() {
  const [page, setPage] = useState(1);
  const content = [
    {
      title: "Home",
      pic: "https://idsb.tmgrup.com.tr/ly/uploads/images/2021/06/13/121551.jpg",
      icon: "fas fa-home",
      position: "bottom",
    },
    {
      title: "Work",
      pic: "https://www.torbayrd-vet.ca/wp-content/uploads/sites/66/2019/05/shutterstock_1011232045.jpg",
      icon: "fas fa-box",
      position: "bottom",
    },
    {
      title: "Blog",
      pic: "https://excitedcats.com/wp-content/uploads/2020/07/best-cat-blogs.jpg",
      icon: "fas fa-book-open",
    },
    {
      title: "About",
      pic: "https://www.understandinganimalresearch.org.uk/files/3614/2900/5800/cat_card.JPG",
      icon: "fas fa-users",
    },
  ];
  return (
    <Body>
      <Phone>
        {content.map((ele, i) =>
          i === page ? (
            <Img show={1} pic={ele.pic} position={ele.position} key={i} />
          ) : (
            <Img pic={ele.pic} key={i} />
          )
        )}
        <div
          style={{
            display: "flex",
            color: "#777777",
            bottom: 0,
            position: "absolute",
            width: "100%",
            justifyContent: "space-evenly",
          }}
        >
          {content.map((ele, i) => (
            <Btn
              content={ele}
              setPage={setPage}
              index={i}
              active={+(i === page)}
              key={i}
            />
          ))}
        </div>
      </Phone>
    </Body>
  );
}
const Btn = ({ content, index, setPage, active }) => {
  return (
    <StyledBtn onClick={() => setPage(index)} active={+active}>
      <Icon className={content.icon}></Icon>
      <h5 style={{ margin: "2px 0 0 0" }}>{content.title}</h5>
    </StyledBtn>
  );
};
