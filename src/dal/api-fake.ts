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

export const getTask = () => {
  const promise: Promise<GetTaskOutput> = Promise.resolve(
    {
      "data": {
        "id": "80cea228-e6dd-4fdc-bb7e-ea7a34eb21e5",
        "type": "tasks",
        "attributes": {
          "title": "New Task By Kiree_1337",
          "order": -1,
          "deadline": null,
          "startDate": null,
          "addedAt": "2026-08-06T09:14:25.547Z",
          "priority": 4,
          "status": 2,
          "updatedAt": "2026-08-06T12:20:02.863Z",
          "boardId": "1979f1df-3698-4280-a4a0-3cfcc6fe487f",
          "boardTitle": "Updated title; Ex:My Cool Board",
          "description": "Non-useful description",
          "attachments": []
        }
      }
    }
  )

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
  const promise = Promise.resolve({
    "data": [
      {
        "id": "b442c65f-c547-4f0d-a77a-f4ea95134b96",
        "type": "tasks",
        "attributes": {
          "title": "Buy Bulba",
          "boardId": "1979f1df-3698-4280-a4a0-3cfcc6fe487f",
          "status": 0,
          "priority": 1,
          "addedAt": "2026-08-06T09:23:26.278Z",
          "attachmentsCount": 0
        }
      },
      {
        "id": "80cea228-e6dd-4fdc-bb7e-ea7a34eb21e5",
        "type": "tasks",
        "attributes": {
          "title": "New Task By Kiree_1337",
          "boardId": "1979f1df-3698-4280-a4a0-3cfcc6fe487f",
          "status": 2,
          "priority": 4,
          "addedAt": "2026-08-06T09:14:25.547Z",
          "attachmentsCount": 0
        }
      },
      {
        "id": "4f310604-82b5-4afd-b9a4-ddf12dfac0a3",
        "type": "tasks",
        "attributes": {
          "title": "learn useEffect",
          "boardId": "13923117-72de-4788-a7f0-4c42f162a5ab",
          "status": 2,
          "priority": 3,
          "addedAt": "2025-09-09T08:30:59.034Z",
          "attachmentsCount": 0
        }
      },
      {
        "id": "07b51554-f680-4b5f-8e81-dbcbe32d08cc",
        "type": "tasks",
        "attributes": {
          "title": "html",
          "boardId": "e11c9480-dd73-4b08-a5fd-452465467805",
          "status": 0,
          "priority": 1,
          "addedAt": "2025-08-27T17:51:48.031Z",
          "attachmentsCount": 0
        }
      },
      {
        "id": "b6213cee-b407-4580-9276-be4f5919375d",
        "type": "tasks",
        "attributes": {
          "title": "css",
          "boardId": "e11c9480-dd73-4b08-a5fd-452465467805",
          "status": 0,
          "priority": 1,
          "addedAt": "2025-08-27T17:51:44.710Z",
          "attachmentsCount": 0
        }
      },
      {
        "id": "4c37b109-d930-4ad4-9e37-4f94d618b59a",
        "type": "tasks",
        "attributes": {
          "title": "js",
          "boardId": "e11c9480-dd73-4b08-a5fd-452465467805",
          "status": 0,
          "priority": 1,
          "addedAt": "2025-08-27T17:51:21.515Z",
          "attachmentsCount": 0
        }
      },
      {
        "id": "0319fde0-3e69-4240-9ee4-278ce525f7f6",
        "type": "tasks",
        "attributes": {
          "title": "title3",
          "boardId": "e11c9480-dd73-4b08-a5fd-452465467805",
          "status": 0,
          "priority": 0,
          "addedAt": "2025-07-03T14:56:48.867Z",
          "attachmentsCount": 0
        }
      }
    ],
    "meta": {
      "page": 1,
      "pageSize": 10,
      "totalCount": 7,
      "pagesCount": 1
    }
  })

  return promise
}