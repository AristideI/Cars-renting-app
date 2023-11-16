import { Outlet, redirect } from 'react-router-dom'
import Header from './Header'
import { ReactElement, useState } from 'react'

export function loader() {
  if (!localStorage.getItem('token')) {
    throw redirect('/login')
  }
  return null
}

export default function MainLayout(): ReactElement {
  const [isMenuOpen, setisMenuOpen] = useState(false)
  function closeMenu() {
    setisMenuOpen(false)
  }
  return (
    <section className="bg-primary-150">
      <Header
        isMenuOpen={isMenuOpen}
        handleMenuVisibility={() => {
          setisMenuOpen(prev => !prev)
        }}
      />
      <div onClick={closeMenu}>
        <Outlet />
      </div>
    </section>
  )
}
