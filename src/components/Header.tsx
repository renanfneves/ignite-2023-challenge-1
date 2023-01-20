import React from 'react'

import styles from './Header.module.css'
import logo from '../assets/logo.svg'

export function Header() {
  return <div className={styles.container}>
    <img src={logo} alt="logo" />
  </div>
}
