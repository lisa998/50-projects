import React, { useEffect } from "react";
import { useState } from "react";
import { Body, H1, Div, Input, StyledTask } from "./styled";

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
      finished={+task.finished}
    >
      {task.name}
    </StyledTask>
  );
};
