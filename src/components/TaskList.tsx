import {useEffect, useState} from "react";
import {TaskItem} from "./TaskItem.tsx";

export function TaskList({ taskId, onSelectTask }) {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
      headers: {
        "api-key": "c251ca4c-bece-44f5-adb8-762906fb5aa8",
      }
    })
      .then((response) => response.json())
      .then((json) => setTasks(json.data))
  }, [])

  const handleResetClick = () => {
    onSelectTask?.(null, null)
  }

  const handleClick = (taskId, boardId) => {
    onSelectTask?.(taskId, boardId)
  }

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
    <div>
      <button onClick={handleResetClick}>reset</button>
      <hr/>
      <ul className="tasks__list">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              isSelected={task.id === taskId}
              onSelectTask={handleClick}
            />
          )
        })}
      </ul>
    </div>
  )
}

