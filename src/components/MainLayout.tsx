import { Outlet } from 'react-router-dom'
import Header from './Header'
export default function MainLayout() {
  return (
    <section className="bg-primaryBlue grid place-content-center">
      <section className="md:max-w-4xl bg-red-100">
        <Header />
        <Outlet />
      </section>
    </section>
  )
}
