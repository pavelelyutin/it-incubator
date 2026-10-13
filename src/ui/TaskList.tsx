import {useEffect, useState} from "react";
import {TaskItem} from "./TaskItem.tsx";
import {getTasks, type GlobalTaskListItemJsonApiData} from "../dal/api.ts";

type Props = {
  selectedTaskId: string | null
  onTaskSelect: (taskId: string | null, boardId: string | null) => void
}

export function TaskList({selectedTaskId, onTaskSelect}: Props) {
  const [tasks, setTasks] = useState<Array<GlobalTaskListItemJsonApiData> | null>(null);

  useEffect(() => {
    getTasks()
      .then((json) => setTasks(json.data))
  }, [])

  const handleResetClick = () => {
    onTaskSelect?.(null, null)
  }

  const handleClick = (taskId: string, boardId: string) => {
    onTaskSelect?.(taskId, boardId)
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
              isSelected={task.id === selectedTaskId}
              onSelectTask={handleClick}
            />
          )
        })}
      </ul>
    </div>
  )
}

