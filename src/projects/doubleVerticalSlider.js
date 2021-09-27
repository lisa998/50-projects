import { styled } from "@material-ui/styles";
import { useState } from "react";

export default function DoubleVerticalSlider() {
  const picSrc = "https://images.unsplash.com/photo-";
  const query = "?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=";
  const [page, setPage] = useState(0);
  const content = [
    {
      h: "Nature flower",
      p: "all in pink",
      bgc: "#FD3555",
      src: `1510942201312-84e7962f6dbb${query}da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80`,
    },
    {
      h: "Bluuue Sky",
      p: "with it's mountains",
      bgc: "#2A86BA",
      src: `1486899430790-61dbf6f6d98b${query}8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80`,
    },
    {
      h: "Lonely castle",
      p: "in the wilderness",
      bgc: "#252E33",
      src: `1519981593452-666cf05569a9${query}90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80`,
    },
    {
      h: "Flying eagle",
      p: "in the sunset",
      bgc: "#FFB866",
      src: `1508768787810-6adc1f613514${query}e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80`,
    },
  ];
  const up = () => {
    setPage((page) => {
      if (page === 0) {
        return 3;
      } else {
        return page - 1;
      }
    });
  };
  const down = () => {
    setPage((page + 1) % 4);
  };

  return (
    <Body>
      <Words>
        {content.map((ele) => (
          <Content ele={ele} page={page} />
        ))}
        <Btn down={true} onClick={down}>
          <i class="fas fa-arrow-up"></i>
        </Btn>
      </Words>

      <Pic>
        <Btn onClick={up}>
          <i class="fas fa-arrow-up"></i>
        </Btn>
        {content.reverse().map((ele) => (
          <Img src={picSrc + ele.src} page={page} />
        ))}
      </Pic>
    </Body>
  );
}

const Body = styled("div")({
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  display: "flex",
  position: "relative",
  height: "85vh",
  fontFamily: "'Open Sans', sans-serif",
});
const Pic = styled("div")({
  flexDirection: "column",
  flex: 2,
  height: "85vh",
  overflow: "hidden",
  position: "relative",
});
const Img = styled("div")({
  width: "100%",
  backgroundImage: (props) => `url(${props.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  height: "100%",
  position: "relative",
  top: (props) => `-${3 - props.page}00%`,
  transition: "0.5s ease",
});
const Words = styled("div")({
  flex: 1,
  width: "100%",
  height: "85vh",
  overflow: "hidden",
  position: "relative",
});
const Content = ({ ele, page }) => {
  return (
    <ContentBox page={page} bgc={ele.bgc}>
      <h1 style={{ fontSize: 40 }}>{ele.h}</h1>
      <p style={{ fontSize: 18 }}>{ele.p}</p>
    </ContentBox>
  );
};
const ContentBox = styled("div")({
  position: "relative",
  height: "100%",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  top: (props) => (props.page ? `-${props.page}00%` : 0),
  transition: "0.5s ease",
  backgroundColor: (props) => props.bgc,
});
const Btn = styled("div")({
  position: "absolute",
  fontSize: 14,
  padding: 15,
  color: "#aaa",
  "&:hover": {
    color: "#222",
  },
  borderRadius: "0  5px 5px  0",
  left: (props) => (props.down ? "100%" : "0%"),
  zIndex: 5,
  backgroundColor: "white",
  transform: (props) =>
    props.down
      ? "rotate(180deg) translateY(-50%) translateX(100%)"
      : "translateY(-50%)",
  transition: "0.3s ease",
  top: "50%",
});
