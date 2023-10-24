import { Link } from 'react-router-dom'
import ErrorCar from '../assets/ErrorCar'

export default function ErrorPage() {
  return (
    <section className="flex h-[85vh] flex-col items-center justify-center gap-12 text-lightGray">
      <p className="font-lora text-5xl">OOOOOPS!</p>
      <ErrorCar size="200" />

      <p className="text-center font-lora text-xl">
        Something went wrong. <br />
        We will solve your issue soon
      </p>
      <Link
        className="rounded-3xl bg-lightGray px-32 py-2 font-interBold text-lg text-primaryBlue"
        to="/"
      >
        Go back
      </Link>
    </section>
  )
}
