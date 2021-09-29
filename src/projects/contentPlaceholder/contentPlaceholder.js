import { useEffect, useState } from "react";
import {
  Body,
  Loading,
  LoadingBox,
  Img,
  Card,
  StyledInfo,
  Author,
} from "./styled";

export default function ContentPlaceholder() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return <Body>{loading ? <LoadContent /> : <Content />}</Body>;
}
const LoadContent = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    const id = setTimeout(() => {
      setActive(!active);
    }, 600);
    return () => {
      clearTimeout(id);
    };
  }, [active]);
  return (
    <Card>
      <Loadings
        active={+active}
        width={350}
        height={200}
        Style={{ borderRadius: 0 }}
      />
      <StyledInfo>
        <Loadings active={+active} width={290} height={12} />
        <Loadings
          active={+active}
          width={290}
          height={12}
          Style={{ margin: "20px 0px 10px" }}
        />
        <Loadings active={+active} width={270} height={12} />
        <Loadings
          active={+active}
          width={270}
          height={12}
          Style={{ margin: "10px 0px 20px" }}
        />
        <Author>
          <Loadings
            active={+active}
            width={40}
            height={40}
            Style={{ margin: "10px 0px 15px" }}
          />
          <div>
            <Loadings
              active={+active}
              width={90}
              height={12}
              Style={{ margin: 10 }}
            />
            <Loadings
              active={+active}
              width={90}
              height={12}
              Style={{ margin: "0px 10px 15px" }}
            />
          </div>
        </Author>
      </StyledInfo>
    </Card>
  );
};
const Loadings = ({ active, width, height, Style }) => {
  return (
    <LoadingBox width={width} height={height} style={Style}>
      <Loading
        width={width}
        height={height}
        transform={active ? "translateX(100%)" : "translateX(-100%)"}
        transition={active ? "0.8s ease-out" : null}
      />
    </LoadingBox>
  );
};
const Content = () => {
  return (
    <Card>
      <Img />
      <Info />
    </Card>
  );
};
const Info = () => {
  return (
    <StyledInfo>
      <p style={{ fontWeight: 700, margin: 0, fontSize: 21 }}>
        Lorem ipsum dolor sit amet
      </p>
      <p style={{ color: "#777777", margin: "5px 0px 10px", fontSize: 18 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
        perferendis
      </p>
      <Author>
        <img
          src="https://randomuser.me/api/portraits/men/45.jpg"
          alt=""
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            margin: "0 10px 0 0",
          }}
        />
        <div>
          <p style={{ fontWeight: 700, margin: 0, fontSize: 18 }}>John Doe</p>
          <p style={{ color: "#aaa", margin: 0, fontSize: 16 }}>Oct 08, 2020</p>
        </div>
      </Author>
    </StyledInfo>
  );
};
