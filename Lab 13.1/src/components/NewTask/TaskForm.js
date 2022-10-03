import { useEffect, useState } from "react";

import useFetch from "../../Hooks/useFetch";

import task from "./TaskForm.module.css";
function TaskForm() {
  //hooks
  const [input, setInput] = useState("");
  const { post } = useFetch();

  //func
  function handClickBtnSubmit(e) {
    e.preventDefault();
    if (input !== "") {
      post(
        "https://react-movies-4914b-default-rtdb.firebaseio.com/tasks.json",
        input
      );
    }
    setInput("");
  }
  return (
    <form className={task.form}>
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={handClickBtnSubmit}>Add Task</button>
    </form>
  );
}

export default TaskForm;
