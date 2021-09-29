import React, { useEffect } from "react";
import { useState } from "react";
import { Body, StyledNote, Tool, Icon, AddBtn } from "./styled";

export default function NoteApp() {
  const [notes, setNote] = useState([
    { id: 0, content: "" },
    { id: 1, content: "" },
  ]);
  const handleAdd = () => {
    let newId = 0;
    if (notes.length > 0) {
      newId = notes[notes.length - 1].id + 1;
    }
    setNote([...notes, { id: newId, content: "" }]);
  };
  useEffect(() => {
    let localnote = JSON.parse(localStorage.getItem("notes"));
    if (localnote) {
      setNote(localnote);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
  return (
    <Body>
      {notes.map((ele, i) => (
        <Note note={ele} notes={notes} setNote={setNote} key={i} />
      ))}
      <AddBtn onClick={handleAdd}>
        <i className="fas fa-plus" style={{ marginRight: 10 }}></i>
        Add Note
      </AddBtn>
    </Body>
  );
}
const Note = ({ note, notes, setNote }) => {
  const [editable, setEditable] = useState(false);
  const inputStyle = { padding: 20, fontSize: 24 };
  const handleChange = (e) => {
    let id = note.id;
    setNote(
      notes.map((ele) => {
        if (ele.id === id) {
          return { ...ele, content: e.target.value };
        } else {
          return ele;
        }
      })
    );
  };
  const handleDelete = () => {
    let id = note.id;
    setNote(notes.filter((ele) => ele.id !== id));
  };
  return (
    <StyledNote>
      <div style={{ backgroundColor: "#9ec862" }}>
        <Tool>
          <Icon
            className="fas fa-edit"
            onClick={() => setEditable((editable) => !editable)}
          />
          <Icon className="fas fa-trash-alt" onClick={handleDelete} />
        </Tool>
      </div>
      {editable ? (
        <textarea
          style={{
            ...inputStyle,
            height: 360,
            width: 400,
            borderStyle: "none",
            maxWidth: 400,
            maxHeight: 360,
            outline: "none",
          }}
          value={note.content}
          onChange={handleChange}
        />
      ) : (
        <div style={inputStyle}>{note.content}</div>
      )}
    </StyledNote>
  );
};
