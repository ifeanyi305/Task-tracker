import Taskloop from "./Task";
const Task = ({ tasks, onDelete, onToggle }) => {
  return (
    <>
      {tasks.map((task) => (
        <Taskloop key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
      ))}
    </>
  );
};

export default Task;