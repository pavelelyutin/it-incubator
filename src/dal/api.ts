type TaskDetailsDto = {
  title: string
  boardTitle: string
  description: string
}

export type TaskDetailData = {
  id: string
  attributes: TaskDetailsDto
}

export type GetTaskOutput = {
  data: TaskDetailData
}

export const getTask = (taskId: string, boardId: string | null) => {
  const promise: Promise<GetTaskOutput> = fetch(`https://trelly.it-incubator.app/api/1.0/boards/${boardId}/tasks/${taskId}`, {
    headers: {
      'api-key': "c251ca4c-bece-44f5-adb8-762906fb5aa8",
    }
  }).then((response) => response.json())

  return promise
}

type GlobalTaskListItemDto = {
  id: string
  boardId: string
  priority: number
  status: number
  title: string
  addedAt: string
}

export type GlobalTaskListItemJsonApiData = {
  id: string
  attributes: GlobalTaskListItemDto
}

export type GlobalTaskListResponse = {
  data: Array<GlobalTaskListItemJsonApiData>
}

export const getTasks = () => {
  const promise: Promise<GlobalTaskListResponse> = fetch("https://trelly.it-incubator.app/api/1.0/boards/tasks", {
    headers: {
      "api-key": "c251ca4c-bece-44f5-adb8-762906fb5aa8",
    }
  }).then((response) => response.json())

  return promise
}