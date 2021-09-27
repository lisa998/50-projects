import { styled } from "@material-ui/styles";
import { useEffect, useState } from "react";

export default function ContentPlaceholder() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  });
  return <Body>{loading ? <LoadContent /> : <Content />}</Body>;
}
const LoadContent = () => {
  const [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setActive(!active);
    }, 600);
  }, [active]);
  return (
    <Card>
      <Loadings
        active={active}
        width={350}
        height={200}
        Style={{ borderRadius: 0 }}
      />
      <StyledInfo>
        <Loadings active={active} width={290} height={12} />
        <Loadings
          active={active}
          width={290}
          height={12}
          Style={{ margin: "20px 0px 10px" }}
        />
        <Loadings active={active} width={270} height={12} />
        <Loadings
          active={active}
          width={270}
          height={12}
          Style={{ margin: "10px 0px 20px" }}
        />
        <Author>
          <Loadings
            active={active}
            width={40}
            height={40}
            Style={{ margin: "10px 0px 15px" }}
          />
          <div>
            <Loadings
              active={active}
              width={90}
              height={12}
              Style={{ margin: 10 }}
            />
            <Loadings
              active={active}
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

const Body = styled("div")({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",

  position: "relative",
});
const Loading = styled("div")({
  backgroundSize: "200% 100%",
  background:
    "linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%)",
  transition: (props) => props.transition,
  transform: (props) => props.transform,
  width: (props) => props.width,
  height: (props) => props.height,
});
const LoadingBox = styled("div")({
  width: (props) => props.width,
  height: (props) => props.height,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  backgroundColor: "rgba(246,246,246,1)",
  backgroundImg: (props) => `url(${props.src})`,
  borderRadius: 20,
});
const Img = styled("div")({
  backgroundImage:
    "url('https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80')",
  backgroundSize: "cover",
  width: 350,
  height: 200,
});
const Card = styled("div")({
  width: 350,
  height: 422,
  borderRadius: 10,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  overflow: "hidden",
  boxShadow: "0 2px 10px rgb(0 0 0 / 20%)",
});
const StyledInfo = styled("div")({
  padding: 30,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
});
const Author = styled("div")({
  display: "flex",
  alignItems: "center",
});
