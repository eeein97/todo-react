import React, { useRef, useState } from "react";
import './App.css';
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodo] = useState([
    {memo: "끝내주게 숨쉬기", no: 1},
    {memo: "끝내주게 밥먹기", no: 2},
    {memo: "끝내주게 놀기", no: 3},
  ]);
  const [inputs, setInputs] = useState({
    memo: "",
    email: ""
  })
  const {memo, no} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    }) 
  }
  const nextId = useRef(4);
  const
  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
