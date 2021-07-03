import React from "react";
import Button from "@material-ui/core/Button";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { useState } from "react";

function Createnote(props) {
  const [expand, setExpand] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setNote((prevdata) => {
      return {
        ...prevdata,
        [name]: value,
      };
    });
    console.log(note);
  };

  const addEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  const expandIt = () => {
    setExpand(true);
  };

  const backToNormal = () => {
    setExpand(false);
  };

  return (
    <>
      <div className="main_note" onDoubleClick={backToNormal}>
        <form>
          {expand ? (
            <input
              type="text"
              name="title"
              value={note.title}
              onChange={inputEvent}
              placeholder="Title"
              autoComplete="off"
            />
          ) : null}
          <textarea
            rows=""
            column=""
            name="content"
            value={note.content}
            onChange={inputEvent}
            placeholder="write a note..."
            onClick={expandIt}
          />
          {expand ? (
            <Button onClick={addEvent}>
              <AddBoxIcon />
            </Button>
          ) : null}
        </form>
      </div>
    </>
  );
}

// className="plus_sign"

export default Createnote;
