import React, { HTMLAttributes } from 'react';

import styles from './TaskStatusBar.module.css'

interface TaskStatusBarProps {
  totalTasks: number;
  totalDoneTasks: number;
}

export function TaskStatusBar({ totalTasks, totalDoneTasks, className }: HTMLAttributes<HTMLInputElement> & TaskStatusBarProps) {
  return <div className={`${styles.container} ${className || ''}`}>
    <div className={styles.labelWrapper}>
      <span className={styles.totalTasksLabel}>
        Tarefas criadas
      </span>
      <div className={styles.counter}>{totalTasks}</div>
    </div>
    <div className={styles.labelWrapper}>
      <span className={styles.doneTasksLabel}>
        Concluídas
      </span>
      <div className={styles.counter}>{totalDoneTasks}</div>
    </div>
  </div>;
}
