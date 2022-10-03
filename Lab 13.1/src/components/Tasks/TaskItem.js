import { useEffect, useState } from "react";
import useFetch from "../../Hooks/useFetch";
import task from "./TaskItem.module.css";
function TaskItem() {
  const [data, setData] = useState([]);
  console.log(data);
  const { request } = useFetch();
  useEffect(() => {
    request(
      "https://react-movies-4914b-default-rtdb.firebaseio.com/tasks.json"
    ).then((data) => setData(data));
  }, [data.length]);

  return (
    <>
      {data.length === 0 ? (
        <li className={task.task}>No tasks Found! Start Adding Some!</li>
      ) : (
        data.map((elm, index) => (
          <li className={task.task} key={index}>
            {elm}
          </li>
        ))
      )}
    </>
  );
}

export default TaskItem;
