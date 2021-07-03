import React from "react";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

function Note(props) {
  const deleteNote = () => {
    props.deleteItem(props.id);
  };

  return (
    <>
      <div className="note">
        <h1>{props.title}</h1>
        <br />
        <p>{props.content}</p>
        <button class="btn" onClick={deleteNote}>
          <DeleteForeverIcon />
        </button>
      </div>
    </>
  );
}

export default Note;
