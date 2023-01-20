import React from 'react'

import styles from './Task.module.css'

interface TaskProps {
  id: string;
  label: string;
  checked: boolean;
  onChangeTaskStatus: (taskId: string) => void;
  onDelete: (taskId: string) => void;
}

export function Task({ id, label, checked, onChangeTaskStatus, onDelete }: TaskProps) {
  return (
    <li className={styles.container}>
       <label className={styles.checkboxContainer}>
        <input
          className={styles.checkboxInput}
          type="checkbox"
          name={id}
          checked={checked}
          onChange={evt => {
            onChangeTaskStatus(evt.target.name)
          }}
        />
        <div className={styles.checkboxDisplay} />
        <span
          className={`${styles.checkboxLabel}
          ${checked && styles.doneLabel || ''}`}
        >
          {label}
        </span>
      </label>
      <button
        type="button"
        className={styles.deleteButton}
        onClick={() => onDelete(id)}
      />
    </li>
  )
}
