import { ReactElement, useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import ProfileIcon from '../assets/ProfileIcon'
import Button from '../components/Button'
import KeyIcon from '../assets/KeyIcon'
import useLogin from '../hooks/useLogin'
import { LoginDataProps } from '../util/types'

export function loader() {
  if (localStorage.getItem('token')) {
    throw redirect('/home')
  }
  return null
}
export default function Login(): ReactElement {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit } = useForm<LoginDataProps>()
  const navigate = useNavigate()
  const [isError, setIsError] = useState(false)
  const [loginResponse, login] = useLogin()

  async function handleLogin({ username, password }: LoginDataProps) {
    setIsLoading(true)
    try {
      const data = await login({
        data: { username, password },
      })
      localStorage.setItem('userId', String(data.data.userId))
      localStorage.setItem('token', data.data.token)
      if (!loginResponse.loading) navigate('/home')
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  return (
    <section className="mt-12 flex flex-col items-center justify-center gap-12 px-4 text-secondary-50">
      <h1 className="text-center font-serif text-5xl">
        MONI <br /> <span className="font-serifItalic">share</span>
      </h1>
      <section className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-8">
        <div className="flex w-full flex-col items-center">
          <h2 className="mb-12 font-serif text-3xl">Login</h2>
          {isError && (
            <p className="mb-3 self-center truncate text-warning-50">
              Incorrect username or password
            </p>
          )}
          <form className="flex w-full flex-col items-center gap-8">
            <div className="relative w-full">
              <input
                className="w-full rounded-full bg-primary-50 py-4 pl-12 pr-2 outline-none placeholder:text-base placeholder:text-secondary-50"
                type="text"
                placeholder="Username / e-mail"
                {...register('username')}
              />
              <ProfileIcon className="absolute left-4 top-0 h-full" />
            </div>
            <div className="relative w-full">
              <input
                className="w-full rounded-full bg-primary-50 py-4 pl-12 pr-2 outline-none placeholder:text-base placeholder:text-secondary-50"
                type="password"
                placeholder="Password"
                {...register('password')}
              />
              <KeyIcon className="absolute left-4 top-0 h-full text-secondary-50" />
            </div>
            <Button text="Log In" isLoading={isLoading} clickHandler={handleSubmit(handleLogin)} />
          </form>
        </div>
      </section>
    </section>
  )
}
