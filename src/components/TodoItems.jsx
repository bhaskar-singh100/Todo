import TodoItem from "./TodoItem";
function TodoItems({ todoItems, handleDeleteButton }) {
  return (
    <>
      <div class="container text-center">
        {todoItems.map((item) => (
          <TodoItem
            todoName={item.name}
            todoDate={item.dueDate}
            handleDeleteButton={handleDeleteButton}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

export default TodoItems;
