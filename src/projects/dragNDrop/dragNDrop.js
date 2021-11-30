import { useState } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDrop, useDrag, DndProvider } from "react-dnd";
import { Body, StyledContainer, Pic } from "./styled";

const ItemTypes = {
  PIC: "pic",
};

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
            key={i}
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
