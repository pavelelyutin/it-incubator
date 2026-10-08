import './App.css'
import {useState, useEffect} from "react";

export function App() {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null)
  const [tasks, setTasks] = useState(null);
  const [boardId, setBoardId] = useState(null);

  useEffect(() => {
    fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
      headers: {
        "api-key": "c251ca4c-bece-44f5-adb8-762906fb5aa8",
      }
    })
      .then((response) => response.json())
      .then((json) => setTasks(json.data))
  }, [])

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

  if (tasks === null) {
    return (
      <>
        <h1>Список задач</h1>
        <p>Загрузка...</p>
      </>
    )
  }

  if (tasks.length === 0) {
    return (
      <>
        <h1>Список задач</h1>
        <p>Задачи отсутствуют</p>
      </>
    )
  }

  return (
    <>
      <h1>Список задач</h1>

      <button onClick={() => {
        setSelectedTaskId(null)
        setSelectedTask(null)
      }}>reset border
      </button>

      <div className="tasks">
        <ul className="tasks__list">
          {tasks.map((task) => {
            return (
              <li onClick={() => {
                setSelectedTaskId(task.id)
                setBoardId(task.attributes.boardId)
              }} className="tasks__item" key={task.id}
                  style={{
                    backgroundColor: task.attributes.priority === 1 ? '#ffd7b5' : task.attributes.priority === 2 ? '#ffb38a' : task.attributes.priority === 3 ? '#ff9248' : task.attributes.priority === 4 ? '#ff6700' : '#fff',
                    borderColor: task.id === selectedTaskId ? 'blue' : '#ddd'
                  }}>
                <p><b>Заголовок: </b><span style={{textDecoration: task.attributes.status === 2 ? "line-through" : ""}}>{task.attributes.title}</span></p>
                <p><b>Статус: </b><input type="checkbox" checked={task.attributes.status}/></p>
                <p><b>Дата создания задачи: </b><span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span></p>
              </li>
            )
          })}
        </ul>

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
      </div>
    </>
  )
}
