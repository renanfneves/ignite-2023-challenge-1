import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { TaskForm } from '../components/TaskForm'
import { Task } from '../components/Task'
import { TaskStatusBar } from '../components/TaskStatusBar'


import styles from './TodoList.module.css'
import { EmptyState } from '../components/EmptyState';

export function TodoList() {
  const [tasks, setTasks] = useState<TaskObject[]>([])

  function handleFinishTask(taskId: string) {
    const newList = tasks?.map((task: TaskObject) => {
      if(task.id === taskId) {
        task.done = !task.done
      }

      return task
    })

    setTasks(newList)
  }

  function handleAddTask(label: string) {
    const taskObject: TaskObject = {
      id: uuidv4(),
      label,
      done: false
    }

    setTasks([...tasks, taskObject]);
  }

  function handleDeleteTask(taskId: string) {
    const newList = tasks.filter((task: TaskObject) => task.id !== taskId)

    setTasks(newList)
  }

  const totalDoneTasks = tasks.reduce((acc, task: TaskObject) => task.done ? ++acc : acc, 0)
  
  return (
    <div className={styles.container}>
      <TaskForm
        className={styles.customForm}
        onSubmitTask={handleAddTask}
      />
      <TaskStatusBar
        totalTasks={tasks?.length}
        totalDoneTasks={totalDoneTasks}
        className={styles.customStatusBar}
      />
      {
        tasks?.length ? 
        (
          <ul className={styles.list}>
            {
              tasks?.map(({ id, label, done }: TaskObject) => (
                <Task
                  key={id}
                  id={id}
                  label={label}
                  checked={done}
                  onChangeTaskStatus={handleFinishTask}
                  onDelete={handleDeleteTask}
                />
              ))
            }
          </ul>
        ) : (
          <EmptyState />
        )
      }
    </div>
  )
}
