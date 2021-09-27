import { styled } from "@material-ui/core";
import React, { useCallback, useEffect } from "react";
import { useState } from "react";

export default function ImageCarousel() {
  const [page, setPage] = useState(0);
  const img = [
    "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
    "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_960_720.jpg",
    "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_960_720.png",
    "https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_960_720.jpg",
  ];
  const prevPage = () => {
    if (page === 0) {
      setPage(3);
    } else {
      setPage((page) => page - 1);
    }
  };
  const nextPage = useCallback(() => {
    if (page === 3) {
      setPage(0);
    } else {
      setPage((page) => page + 1);
    }
  }, [page]);
  useEffect(() => {
    let id = setInterval(() => {
      nextPage();
    }, 1500);
    return () => clearInterval(id);
  }, [nextPage]);
  return (
    <Body>
      <Div>
        <ImgContainer page={page}>
          {img.map((ele, i) => (
            <Img url={ele} />
          ))}
        </ImgContainer>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Btn onClick={prevPage}>Prev</Btn>
          <Btn onClick={nextPage}>Next</Btn>
        </div>
      </Div>
    </Body>
  );
}
const Body = styled("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "85vh",
  fontFamily: "'Roboto', sans-serif",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "center",
});
const Div = styled("div")({
  width: 500,
  height: 536,
  overflow: "hidden",
});
const ImgContainer = styled("div")({
  width: 500,
  height: 500,
  display: "flex",
  transform: (props) => `translateX(-${props.page * 500}px)`,
  transition: "0.5s ease-in-out;",
});
const Img = styled("div")({
  backgroundImage: (props) => (props.url ? `url('${props.url}')` : null),
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: 500,
  height: 500,
  flexShrink: 0,
});
const Btn = styled("div")({
  backgroundColor: "rgb(36 132 114)",
  width: 240,
  height: 36,
  color: "white",
  fontSize: 24,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  "&:hover": {
    opacity: 0.7,
  },
  cursor: "pointer",
});
