import React from 'react'
import s from './Search.module.scss'
import searchIcon from './coolicon.png'

const Search = () => {
  return (
    <div className={s.search}>
        <input id={s.search} type="text" placeholder='Search'/>
        <img className={s.icon} src={searchIcon} alt="search" />
    </div>
  )
}

export default Search