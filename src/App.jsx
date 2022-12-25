import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputList, setInputList] = React.useState("");
  const [Items, setItems] = React.useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listofIteam = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };

  const deleteIteam = (id) => {
        console.log("delete");
        setItems((oldItems) => {
          return oldItems.filter((arrElem, index) => {
            return index !== id;
          });
        });
    }

    
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input
          type="text"
          placeholder="Add a Items"
          value={inputList}
          onChange={itemEvent}
        />
        <button onClick={listofIteam}> + </button>
        <ol>
          {/* <li> {inputList} </li> */}
          {Items.map((itemval, index) => {
            return <ToDoList key={index} id={index} text={itemval}
            onSelect={deleteIteam} />;
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
