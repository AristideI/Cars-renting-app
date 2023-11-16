import { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'

export default function NotFound(): ReactElement {
  const navigate = useNavigate()
  return (
    <main className="mx-auto flex h-screen w-1/3 flex-col items-center justify-center gap-8 px-4">
      <h1 className="text-9xl font-extrabold tracking-widest text-secondary-50">404</h1>
      <div className="absolute rotate-12 rounded bg-primary-200 px-2 text-sm text-secondary-50">
        Page Not Found
      </div>
      <Button clickHandler={() => navigate('..', { relative: 'path' })} text="Go Home" />
    </main>
  )
}
