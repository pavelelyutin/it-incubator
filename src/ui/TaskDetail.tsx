import {useEffect, useState} from "react";
import {getTask, type TaskDetailData} from "../dal/api.ts";

type Props = {
  taskId: string | null
  boardId: string | null
}

export function TaskDetail({ taskId, boardId }:Props) {
  const [selectedTask, setSelectedTask] = useState<TaskDetailData | null>(null)

  useEffect(() => {
    if (!taskId) {
      setSelectedTask(null)
      return;
    }

    getTask(taskId, boardId)
      .then((json) => {setSelectedTask(json.data)})
  }, [taskId, boardId])


  return (
    <div className="tasks__detail">
      <h2>Task Detail</h2>

      {!taskId && !selectedTask && "Task is not selected"}
      {taskId && !selectedTask && "Loading..."}
      {selectedTask && taskId && taskId !== selectedTask.id && "Loading..."}
      {selectedTask  && (
        <ul>
          <li><b>Title: </b>{selectedTask.attributes.title}</li>
          <li><b>Board Title: </b>{selectedTask.attributes.boardTitle}</li>
          <li><b>Description: </b>{selectedTask.attributes.description || "no description"}</li>
        </ul>
      )}
    </div>
  )
}