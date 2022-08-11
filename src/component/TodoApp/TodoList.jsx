import React from "react";
import DoneIcon from "@mui/icons-material/Done";

const TodoList = (props) => {
  return (
    <li>
      {props.text}
      <button
        className="btn btn-success"
        onClick={() => {
          props.deleteItem(props.id);
        }}
      >
        <DoneIcon />
      </button>
    </li>
  );
};

export default TodoList;
