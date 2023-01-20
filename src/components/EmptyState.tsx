import React from 'react'

import clipboard from '../assets/clipboard.svg'

import styles from './EmptyState.module.css'

export function EmptyState() {
  return (
    <div className={styles.container}>
      <img
        src={clipboard}
        alt="não há tarefas cadastradas"
      />
      <p className={styles.text}>
        <span>Você ainda não tem tarefas cadastradas</span>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </p>
    </div>
  )
}
