import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const TodoList = (props) => {
  return (
    <li className="completed__item">
      {props.text}
      <button
        onClick={() => {
          return props.reAddItem(props.id);
        }}
        className="btn btn-danger"
      >
        <DeleteIcon />
      </button>
    </li>
  );
};

export default TodoList;
