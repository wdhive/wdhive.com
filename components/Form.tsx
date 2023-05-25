'use client'
import { useState, useEffect } from 'react'
import css from './Form.module.css'

interface Email {
  email: string
  createdAt: string
}

function formatDate(str: string) {
  return new Date(str).toLocaleDateString()
}

const Form = () => {
  const [isExists, setIsExists] = useState(false)
  const [data, setData] = useState<Email>(() => {
    const state = typeof window !== 'undefined' && localStorage.getItem('email')
    return state ? JSON.parse(state) : ({} as Email)
  })

  useEffect(() => {
    typeof window !== 'undefined' &&
      localStorage.setItem('email', JSON.stringify(data))
  }, [data.email])

  if (data.email) {
    return (
      <div>
        <div className={css.emailStatus}>
          {isExists ? (
            <>
              <span className={css.email}>{data.email}</span> was added to our
              mailing list at{' '}
              <span className={css.date}>{formatDate(data.createdAt)}</span>
            </>
          ) : (
            <>
              <span className={css.email}>{data.email}</span> has been added to
              our mailing list
            </>
          )}
        </div>

        <button
          type="button"
          className={css.button1}
          onClick={handleEmailReset}
        >
          Use another one
        </button>
      </div>
    )
  }

  function handleEmailReset() {
    setData({} as any)
    setIsExists(false)
  }

  async function handleFormSubmit(e: any) {
    e.preventDefault()
    const email = e.target.elements.email.value
    const res = await fetch('/api/email', {
      headers: { 'Content-Type': 'text/plain' },
      method: 'POST',
      body: email,
    })

    const data = await res.json()
    data.email && setData(data.email)
    console.log(data.alreadyExists)
    data.alreadyExists && setIsExists(true)
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input className={css.input} type="email" name="email" />
      <button className={css.button2} type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form
