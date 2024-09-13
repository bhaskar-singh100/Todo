function TodoItem({ todoName, todoDate, handleDeleteButton }) {
  return (
    <>
      <div class="row">
        <div class="col-6">{todoName}</div>
        <div class="col-4">{todoDate}</div>
        <div class="col-2">
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => console.log("clicked")}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoItem;
