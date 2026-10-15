import {useEffect, useState} from "react";
import {getTask, type TaskDetailData} from "../dal/api.ts";

export function useTaskDetails(taskId: string | null, boardId: string | null) {
  const [taskDetails, setTaskDetails] = useState<TaskDetailData | null>(null)

  useEffect(() => {
    if (!taskId) {
      setTaskDetails(null)
      return;
    }

    getTask(taskId, boardId)
      .then((json) => {
        setTaskDetails(json.data)
      })
  }, [taskId, boardId])

  return {
    taskDetails
  }
}