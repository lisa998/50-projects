import { styled } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";

export default function Todos() {
  const [value, setValue] = useState("");
  const [tasks, setTask] = useState([]);
  const send = (e) => {
    let id;
    if (tasks[0]) {
      id = tasks[tasks.length - 1].id + 1;
    } else {
      id = 1;
    }
    if (e.keyCode === 13) {
      setTask((task) => [...task, { id, name: value, finished: false }]);
      setValue("");
    }
  };
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("tasks"));
    setTask(data);
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Body>
      <H1>TODOS</H1>
      <Div>
        <Input
          placeholder="Enter Your Todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={send}
        />
        {tasks.map((ele) => (
          <Task task={ele} setTask={setTask} tasks={tasks} key={ele.id} />
        ))}
      </Div>
      <p style={{ color: "#b5b5b5", textAlign: "center" }}>
        Left click to toggle completed.
        <br />
        Right click to delete todo.
      </p>
    </Body>
  );
}
const Task = ({ task, tasks, setTask }) => {
  const handleLeftClick = (e) => {
    if (e.button === 0) {
      setTask(
        tasks.map((ele) => {
          if (ele.id === task.id) {
            return { ...ele, finished: !ele.finished };
          } else return ele;
        })
      );
    }
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    setTask(tasks.filter((ele) => ele.id !== task.id));
  };
  return (
    <StyledTask
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      finished={task.finished}
    >
      {task.name}
    </StyledTask>
  );
};

const Body = styled("div")({
  position: "relative",
  display: "flex",
  width: "100%",
  height: "85vh",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: " #f5f5f5",
  color: "#444",
  fontFamily: "'Poppins', sans-serif",
  flexDirection: "column",
  overflow: "auto",
});
const H1 = styled("h1")({
  color: "rgb(179, 131, 226)",
  opacity: 0.4,
  fontSize: 120,
  marginBottom: "5rem",
});
const Div = styled("div")({
  width: 400,
  boxShadow: "0 4px 10px rgb(0 0 0 / 10%)",
});
const Input = styled("input")({
  outlineColor: "rgb(179, 131, 226)",
  border: "none",
  padding: "18px 36px",
  fontSize: "1.5rem",
  width: "100%",
  "&::placeholder": {
    opacity: "0.5",
  },
});
const StyledTask = styled("div")({
  padding: "18px 36px",
  borderTop: "1px solid  rgb(0 0 0 / 10%)",
  backgroundColor: "white",
  textDecoration: (props) => (props.finished ? "line-through" : null),
  color: (props) => (props.finished ? "rgb(0 0 0 / 50%)" : null),
  fontSize: 28,
});
