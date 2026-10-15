import {TaskItem} from "./TaskItem.tsx";
import {useTasks} from "../bll/useTasks.tsx";

type Props = {
  selectedTaskId: string | null
  onTaskSelect: (taskId: string | null, boardId: string | null) => void
}

export function TaskList({selectedTaskId, onTaskSelect}: Props) {
  const {tasks} = useTasks();

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

