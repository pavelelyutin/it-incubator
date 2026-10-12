import {useEffect, useState} from "react";

type TaskDetailsDto = {
  title: string
  boardTitle: string
  description: string
}

type TaskDetailData = {
  id: string
  attributes: TaskDetailsDto
}

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

    fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
      headers: {
        'api-key': "c251ca4c-bece-44f5-adb8-762906fb5aa8",
      }
    })
      .then((response) => response.json())
      .then((json) => {setSelectedTask(json.data)})
  }, [taskId])


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