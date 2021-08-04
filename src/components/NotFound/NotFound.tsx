import React from 'react'
import s from './NotFound.module.css'

const NotFound = () => {
  return (
    <main className={s.container}>
      <h1 className={s.title}>
        <span className={s.error}>404</span>
        <br />
        Page Not Found
      </h1>
    </main>
  )
}

export default NotFound
