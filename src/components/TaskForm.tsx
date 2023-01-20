import React, { ChangeEvent, FormEvent, FormEventHandler, HTMLAttributes, useState } from 'react'
import styles from './TaskForm.module.css'
import plus from '../assets/plus.svg'

interface TaskFormProps {
  onSubmitTask: (task: string) => void;
}

export function TaskForm({ className, onSubmitTask }: HTMLAttributes<HTMLInputElement> & TaskFormProps) {
  const [task, setTask] = useState('')

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    console.log(evt.target.value)
    setTask(evt.target.value)
  }

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault()

    onSubmitTask(task)

    setTask('')
  } 

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.container} ${className || ''}`}
    >
      <input
        className={styles.input}
        value={task}
        onChange={handleChange}
        placeholder="Adicione uma nova tarefa"
      />
      <button type="submit" className={styles.button}>
        <span>Criar</span>
        <img src={plus} alt="criar" />
      </button>
    </form>
  )
}
