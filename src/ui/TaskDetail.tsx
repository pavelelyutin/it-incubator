import {useTaskDetails} from "../bll/useTaskDetails.tsx";

type Props = {
  taskId: string | null
  boardId: string | null
}

export function TaskDetail({ taskId, boardId }:Props) {
  const { taskDetails } = useTaskDetails(taskId, boardId)

  return (
    <div className="tasks__detail">
      <h2>Task Detail</h2>

      {!taskId && !taskDetails && "Task is not selected"}
      {taskId && !taskDetails && "Loading..."}
      {taskDetails && taskId && taskId !== taskDetails.id && "Loading..."}
      {taskDetails  && (
        <ul>
          <li><b>Title: </b>{taskDetails.attributes.title}</li>
          <li><b>Board Title: </b>{taskDetails.attributes.boardTitle}</li>
          <li><b>Description: </b>{taskDetails.attributes.description || "no description"}</li>
        </ul>
      )}
    </div>
  )
}