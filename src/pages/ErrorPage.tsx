import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import ErrorCar from '../assets/ErrorCar'
import Button from '../components/Button'

export default function ErrorPage(): ReactElement {
  const navigate = useNavigate()
  return (
    <section className="mx-auto flex flex-col items-center justify-center gap-12 px-4 pt-24 text-secondary-50 md:w-1/2">
      <p className="font-serif text-5xl">OOOOOPS!</p>
      <ErrorCar className="h-52 w-52" />
      <p className="text-center font-serif text-xl">
        Something went wrong. <br />
        We will solve your issue soon
      </p>
      <Button clickHandler={() => navigate('/')} text="Go back" />
    </section>
  )
}
