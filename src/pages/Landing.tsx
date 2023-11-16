import { ReactElement } from 'react'
import Button from '../components/Button'
import { useNavigate, redirect } from 'react-router-dom'

export function loader() {
  if (localStorage.getItem('token')) {
    throw redirect('/home')
  }
  return null
}

export default function Landing(): ReactElement {
  const navigate = useNavigate()
  return (
    <section className="mx-auto mt-32 flex w-full flex-col items-center justify-start gap-24 px-4 text-secondary-50 md:w-1/2">
      <h1 className="text-center font-serif text-5xl">
        MONI <br /> <span className="font-serifItalic">share</span>
      </h1>
      <div className="text-center font-serif text-xl md:text-2xl">
        <p>Start sharing your Monis</p>
        <p>with the world</p>
      </div>
      <div className="flex w-full flex-col gap-4 font-mono md:flex-row">
        <Button clickHandler={() => navigate('login')} text="Log In" />
      </div>
    </section>
  )
}
