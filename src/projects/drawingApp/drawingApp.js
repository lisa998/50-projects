import { useState, useRef } from "react";
import { Body, Canvas, Toolbar, Btn } from "./styled";

export default function DrawingApp() {
  const [size, setSize] = useState(10);
  const [color, setColor] = useState("black");
  const canvasRef = useRef(undefined);
  console.log("render");
  let ctx,
    x,
    y,
    isPress = false;

  const handleMouseDown = (e) => {
    isPress = true;
    x = e.nativeEvent.offsetX;
    y = e.nativeEvent.offsetY;
  };
  const handleMouseUp = () => {
    isPress = false;
    x = undefined;
    y = undefined;
  };
  const handleMouseMove = (e) => {
    if (isPress) {
      let x2 = e.nativeEvent.offsetX;
      let y2 = e.nativeEvent.offsetY;
      drawCircle(x2, y2);
      drawLine(x, y, x2, y2);
      x = x2;
      y = y2;
    }
  };
  const drawCircle = (x, y) => {
    ctx = canvasRef.current.getContext("2d");
    console.log(x, y);
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  };
  const drawLine = (x, y, x2, y2) => {
    ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
  };

  return (
    <Body>
      <Canvas
        width="796"
        height="496"
        ref={canvasRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      ></Canvas>
      <Toolbar>
        <Tool
          size={size}
          setSize={setSize}
          color={color}
          setColor={setColor}
          canvasRef={canvasRef}
        />
      </Toolbar>
    </Body>
  );
}

const Tool = ({ size, setSize, color, setColor, canvasRef }) => {
  const addSize = () => {
    setSize((size) => {
      if (size === 50) {
        return size;
      }
      return (size += 5);
    });
  };
  const reduceSize = () => {
    setSize((size) => {
      if (size === 5) {
        return size;
      }
      return (size -= 5);
    });
  };
  const clear = () => {
    let ctx = canvasRef.current.getContext("2d");
    ctx.clearRect(0, 0, 796, 496);
  };
  return (
    <>
      <Btn onClick={reduceSize}>-</Btn>
      <Btn>{size}</Btn>
      <Btn onClick={addSize}>+</Btn>
      <Btn>
        <input
          style={{ height: 40 }}
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </Btn>
      <Btn style={{ position: "absolute", right: 18 }} onClick={clear}>
        X
      </Btn>
    </>
  );
};
