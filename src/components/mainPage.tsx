import {useState} from "react";
import {TaskList} from "./TaskList.tsx";
import {TaskDetail} from "./TaskDetail.tsx";

export function MainPage() {
  const [taskId, setTaskId] = useState(null);
  const [boardId, setBoardId] = useState(null);

  const handleClick = (taskId, boardId) => {
    setTaskId(taskId);
    setBoardId(boardId);
  }

  return (
    <>
      <div className="tasks">
        <TaskList onSelectTask={handleClick} taskId={taskId} />
        <TaskDetail taskId={taskId} boardId={boardId} />
      </div>
    </>
  )
}