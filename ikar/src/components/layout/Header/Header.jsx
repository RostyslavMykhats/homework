import React, { useState } from 'react'
import styles from './Header.module.scss'
import logo from './logo.png';
import Search from './Search/Search';



const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}><a href="#"><img src={logo} alt="logo" /></a></h1>
      <ul className={styles.nav}>
        <li> <a href="#">Про нас</a></li>
        <li><a href="#">Дослідження</a></li>
        <li><a href="#">Тренди</a></li>
        <li><a href="#">Контакти</a></li>
        <li><a href="#">Підтримати</a></li>
        <li><Search /></li>
      </ul>
      <p className={styles.changelang}>UA</p>
    </header>
  )
}

export default Header