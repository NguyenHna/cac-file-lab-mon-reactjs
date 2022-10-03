import TaskItem from "./TaskItem";
import task from "./Tasks.module.css";

function Tasks() {
  return (
    <div className={task.container}>
      <ul>
        <TaskItem />
      </ul>
    </div>
  );
}

export default Tasks;
