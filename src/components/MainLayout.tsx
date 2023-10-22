import { Outlet } from 'react-router-dom'
import Header from './Header'
export default function MainLayout() {
  return (
    <section className="grid place-content-center bg-primaryBlue">
      <section className="bg-red-100 md:max-w-4xl">
        <Header />
        <Outlet />
      </section>
    </section>
  )
}
