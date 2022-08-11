import React, { useState } from "react";
import TodoList from "./TodoList";
import CompletedList from "./CompletedList";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import RemoveDoneIcon from "@mui/icons-material/RemoveDone";

const TodoApp = () => {
  const [item, setItem] = useState("");
  const [listItems, setListItems] = useState([]);
  const [completed, setCompleted] = useState([]);

  const inputEvent = (e) => {
    setItem(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();
    setListItems((preVal) => {
      return [...preVal, item];
    });
    setItem("");
  };

  const deleteItem = (id) => {
    const sid = id;
    setListItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
    setCompleted((oldItems) => {
      return [...oldItems, listItems[sid]];
    });
  };

  const reAddItem = (id) => {
    const sid = id;
    // setListItems((oldItems) => {
    //   return [...oldItems, completed[sid]];
    // });
    setCompleted((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== sid;
      });
    });
  };

  const clearAll = () => {
    setCompleted((oldItems) => {
      return [...oldItems, ...listItems];
    });
    setListItems([]);
  };

  const BtnClearAll = () => {
    if (listItems.length > 0) {
      return (
        <button onClick={clearAll} className="btn-success btn-lg">
          <DoneAllIcon />
        </button>
      );
    }
  };

  const openAll = () => {
    // setListItems((oldItems) => {
    //   return [...oldItems, ...completed];
    // });
    setCompleted([]);
  };

  const BtnOpenAll = () => {
    if (completed.length > 0) {
      return (
        <button onClick={openAll} className="btn-danger btn-lg">
          <RemoveDoneIcon />
        </button>
      );
    }
  };

  return (
    <div className="todo-app">
      <h1>reTask Todo</h1>
      <form onSubmit={submitForm}>
        <input
          type="text"
          onChange={inputEvent}
          value={item}
          className="add-new-task"
          placeholder="Add New Task"
        />
        <button type="submit" className="btn btn-primary">
          <span style={{ fontSize: "20px", marginRight: "8px" }}>+</span> Add
          Task
        </button>
      </form>
      {/* Todo List */}
      <div className="todo__list">
        <h2>Todo List</h2>
        <div className="actions">
          <BtnClearAll />
        </div>
        <ol>
          {listItems.map((item, index) => {
            return (
              <TodoList
                key={index}
                id={index}
                text={item}
                deleteItem={deleteItem}
              />
            );
          })}
        </ol>
      </div>

      {/* Completed List */}
      <div className="todo__list">
        <h2>Completed List</h2>
        <div className="actions">
          <BtnOpenAll />
        </div>
        <ol>
          {completed.map((item, index) => {
            return (
              <CompletedList
                key={index}
                id={index}
                text={item}
                reAddItem={reAddItem}
              />
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default TodoApp;
