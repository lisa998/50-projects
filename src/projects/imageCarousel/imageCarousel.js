import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Body, Div, Img, ImgContainer, Btn } from "./styled";

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
            <Img url={ele} key={i} />
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
