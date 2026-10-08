import {useEffect, useState} from "react";

export function TaskList() {
  const [tasks, setTasks] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);

  useEffect(() => {
    fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
      headers: {
        "api-key": "c251ca4c-bece-44f5-adb8-762906fb5aa8",
      }
    })
      .then((response) => response.json())
      .then((json) => setTasks(json.data))
  }, [])

  if (tasks === null) {
    return (
      <>
        <p>Загрузка...</p>
      </>
    )
  }

  if (tasks.length === 0) {
    return (
      <>
        <p>Задачи отсутствуют</p>
      </>
    )
  }

  return (
    <ul className="tasks__list">
      {tasks.map((task) => {
        return (
          <li onClick={() => {
            setSelectedTaskId(task.id)
            // setBoardId(task.attributes.boardId)
          }} className="tasks__item" key={task.id}
              style={{
                backgroundColor: task.attributes.priority === 1 ? '#ffd7b5' : task.attributes.priority === 2 ? '#ffb38a' : task.attributes.priority === 3 ? '#ff9248' : task.attributes.priority === 4 ? '#ff6700' : '#fff',
                borderColor: task.id === selectedTaskId ? 'blue' : '#ddd'
              }}>
            <p><b>Заголовок: </b><span
              style={{textDecoration: task.attributes.status === 2 ? "line-through" : ""}}>{task.attributes.title}</span>
            </p>
            <p><b>Статус: </b><input type="checkbox" checked={task.attributes.status}/></p>
            <p><b>Дата создания задачи: </b><span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span></p>
          </li>
        )
      })}
    </ul>
  )
}