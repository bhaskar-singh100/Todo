import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { useState } from "react";

function App() {
  const [addTodoItems, setAddTodoItems] = useState([
    {
      name: "Buy Milk",
      dueDate: "04/10/2023",
    },
    {
      name: "Go to College",
      dueDate: "04/10/2023",
    },
  ]);

  const onClickButton = (todoItem, todoDate) => {
    setAddTodoItems([
      ...addTodoItems,
      {
        name: todoItem,
        dueDate: todoDate,
      },
    ]);

    const handleDeleteButton = (itemName) => {
      console.log(itemName);
    };
  };
  return (
    <>
      <center>
        <h1 className="heading">Todo App</h1>
      </center>
      <AddTodo clickButton={onClickButton}></AddTodo>
      <TodoItems todoItems={addTodoItems}></TodoItems>
    </>
  );
}

export default App;
