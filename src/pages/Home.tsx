import { ReactElement } from 'react'
import { useNavigate, useLoaderData } from 'react-router-dom'
import Button from '../components/Button'
import { apiUrl } from '../util/apiUrl'
import { UserDto } from '../util/api'

export async function loader(): Promise<UserDto> {
  const currentUserId = localStorage.getItem('userId')
  const getUser = await fetch(`${apiUrl}/users/${currentUserId}`)
  const currentUser = await getUser.json()
  return currentUser
}

export default function Home(): ReactElement {
  const navigate = useNavigate()
  const currentUser = useLoaderData() as UserDto

  return (
    <section className="mx-auto mt-32 flex w-full flex-col items-center justify-start gap-7 px-4 text-secondary-50 md:w-1/3">
      <h1 className="text-center font-serif text-5xl">
        MONI <br /> <span className="font-serifItalic">share</span>
      </h1>
      <div className="text-center font-serif text-xl">
        <p>Hello {currentUser.name}👋,</p>
        <p>What are you up today?</p>
      </div>
      <Button clickHandler={() => navigate('/bookcar')} text="Book Car" />
      <h3 className="text-center text-lg">or</h3>
      <div className="flex w-full flex-col gap-4 font-mono">
        <Button clickHandler={() => navigate('/mycars')} text="See My Cars" variant="secondary" />
        <Button
          clickHandler={() => navigate('/mybooking')}
          text="See My Bookings"
          variant="secondary"
        />
      </div>
    </section>
  )
}
