import { useState } from "react";

function AddTodo({ clickButton }) {
  const [item, setItem] = useState();
  const [date, setDate] = useState();

  const clickKeyDownItem = (event) => {
    setItem(event.target.value);
  };

  const clickKeyDownDate = (event) => {
    setDate(event.target.value);
  };

  const onClickButton = () => {
    clickButton(item, date);
    setItem("");
    setDate("");
  };

  return (
    <div className="row">
      <div class="col-6">
        <input
          type="text"
          placeholder="Enter Todo Here"
          value={item}
          onChange={clickKeyDownItem}
        ></input>
      </div>
      <div class="col-4">
        <input type="date" value={date} onChange={clickKeyDownDate}></input>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success" onClick={onClickButton}>
          Add
        </button>
      </div>
    </div>
  );
}

export default AddTodo;
