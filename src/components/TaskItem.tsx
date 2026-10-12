type GlobalTaskListItemDto = {
    id: string
    boardId: string
    priority: number
    status: number
    title: string
}

export type GlobalTaskListItemJsonApiData = {
    id: string
    attributes: GlobalTaskListItemDto
}

type Props = {
    task
}

export function TaskItem({ task, isSelected, onSelectTask}) {
  const handleClick = () => onSelectTask?.(task.id, task.attributes.boardId)

  return (
    <li onClick={handleClick} className="tasks__item"
        style={{
          backgroundColor: task.attributes.priority === 1 ? '#ffd7b5' : task.attributes.priority === 2 ? '#ffb38a' : task.attributes.priority === 3 ? '#ff9248' : task.attributes.priority === 4 ? '#ff6700' : '#fff',
          borderColor: isSelected ? 'blue' : '#ddd'
        }}>
      <p><b>Заголовок: </b><span
        style={{textDecoration: task.attributes.status === 2 ? "line-through" : ""}}>{task.attributes.title}</span>
      </p>
      <p><b>Статус: </b><input type="checkbox" checked={task.attributes.status}/></p>
      <p><b>Дата создания задачи: </b><span>{new Date(task.attributes.addedAt).toLocaleDateString()}</span></p>
    </li>
  )
}