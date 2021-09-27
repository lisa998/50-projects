import { styled } from "@material-ui/styles";
import { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrop, useDrag } from "react-dnd";

const ItemTypes = {
  PIC: "pic",
};
const Body = styled("div")({
  height: "80vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "rgb(63 81 181 / 20%)",
});
const StyledContainer = styled("div")({
  width: 150,
  height: 150,
  margin: 10,
  border: "3px solid black",
  position: "relative",
});

const Pic = styled("div")({
  backgroundImage: "url('https://source.unsplash.com/random/150x150')",
  height: 144,
  width: 144,
  cursor: "pointer",
  position: "relative",
});

const hoverStyle = {
  backgroundColor: "#333",
  borderColor: "white",
  borderStyle: "dashed",
};

export default function DragNDrop() {
  const [isEmpty, setIsEmpty] = useState([false, true, true, true, true]);
  return (
    <Body>
      <DndProvider backend={HTML5Backend}>
        {isEmpty.map((ele, i) => (
          <Container
            Empty={ele}
            setIsEmpty={setIsEmpty}
            index={i}
            isEmpty={isEmpty}
          />
        ))}
      </DndProvider>
    </Body>
  );
}
const Container = ({ isEmpty, setIsEmpty, index, Empty }) => {
  const [{ canDrop, isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.PIC,
    drop: () => ({ index }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  }));
  const isActive = canDrop && isOver;
  return (
    <StyledContainer ref={drop} style={isActive ? hoverStyle : null}>
      {Empty ? null : <Box setIsEmpty={setIsEmpty} isEmpty={isEmpty} />}
    </StyledContainer>
  );
};
const Box = ({ isEmpty, setIsEmpty }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.PIC,
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const index = monitor.getDropResult().index;
        setIsEmpty(
          isEmpty.map((ele, i) => {
            if (index === i) {
              return (ele = false);
            } else {
              return (ele = true);
            }
          })
        );
      }
    },
  }));
  const opacity = isDragging ? 0.4 : 1;
  return <Pic ref={drag} style={{ opacity }} />;
};
