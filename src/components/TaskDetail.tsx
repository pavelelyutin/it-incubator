import {useEffect, useState} from "react";

export function TaskDetail() {
  const [selectedTask, setSelectedTask] = useState(null)
  // const [boardId, setBoardId] = useState(null);

  const selectedTaskId = '4f310604-82b5-4afd-b9a4-ddf12dfac0a3'
  const boardId = '13923117-72de-4788-a7f0-4c42f162a5ab'

  useEffect(() => {
    if (!selectedTaskId) {
      return;
    }

    fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${selectedTaskId}`, {
      headers: {
        'api-key': "c251ca4c-bece-44f5-adb8-762906fb5aa8",
      }
    })
      .then((response) => response.json())
      .then((json) => {setSelectedTask(json.data)})
  }, [selectedTaskId])


  return (
    <div className="tasks__detail">
      <h2>Task Detail</h2>

      {!selectedTaskId && !selectedTask && "Task is not selected"}
      {selectedTaskId && !selectedTask && "Loading..."}
      {selectedTask && selectedTaskId && selectedTaskId !== selectedTask.id && "Loading..."}
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