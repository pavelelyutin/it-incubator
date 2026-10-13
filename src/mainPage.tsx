import {useState} from "react";
import {TaskList} from "./ui/TaskList.tsx";
import {TaskDetail} from "./ui/TaskDetail.tsx";

export function MainPage() {
  const [taskId, setTaskId] = useState<string | null>(null);
  const [boardId, setBoardId] = useState<string | null>(null);

  const handleClick = (taskId:string | null, boardId: string | null) => {
    setTaskId(taskId);
    setBoardId(boardId);
  }

  return (
    <>
      <div className="tasks">
        <TaskList
            selectedTaskId={taskId}
            onTaskSelect={handleClick}
        />
        <TaskDetail taskId={taskId} boardId={boardId} />
      </div>
    </>
  )
}