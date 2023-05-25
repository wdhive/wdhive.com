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
      <>
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
      </>
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
      <div className={css.emailStatus}>
        We will send you an email when we will be ready!!
      </div>

      <input
        required
        type="email"
        name="email"
        className={css.input}
        placeholder="Your email...."
        title="Please enter a valid email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
      />

      <button className={css.button2} type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form
