import {TaskList} from "./ui/TaskList.tsx";
import {TaskDetail} from "./ui/TaskDetail.tsx";
import {useTaskSelection} from "./bll/useTaskSelection.tsx";

export function MainPage() {
  const {taskId, boardId, setTaskId, setBoardId} = useTaskSelection();

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