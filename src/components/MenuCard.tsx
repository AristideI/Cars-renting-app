import { Fragment, ReactElement } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CarIcon from '../assets/CarIcon'
import CarsIcon from '../assets/CarsIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import ListIcon from '../assets/ListIcon'
import LogoutIcon from '../assets/LogoutIcon'
import MyBookingsIcon from '../assets/MyBookingsIcon'
import { MenuCardProps } from '../util/types'
import { Transition } from '@headlessui/react'

export default function MenuCard({ handleLink, isMenuOpen }: MenuCardProps): ReactElement {
  const navigate = useNavigate()
  function handleLogout() {
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    navigate('/login')
  }
  return (
    <Transition
      as={Fragment}
      show={isMenuOpen}
      enter="transition duration-400"
      enterFrom="opacity-0 -translate-x-[15rem]"
      enterTo="opacity-100 -translate-x-0"
      leave="duration-400 transition"
      leaveFrom="opacity-100 -translate-x-0"
      leaveTo="opacity-0 -translate-x-[15rem]"
    >
      <section className="absolute left-5 top-24 z-10 rounded-2xl border border-primary-150 bg-primary-100 px-5">
        <section className="flex flex-col gap-4 border-b border-secondary-50 py-4 text-secondary-50">
          <Link onClick={handleLink} to="bookcar" className="flex items-center gap-4">
            <CarIcon className="h-8 w-8" />
            <span className=" text-lg">Book A Car</span>
          </Link>
          <Link onClick={handleLink} to="mybooking" className="flex items-center gap-4">
            <MyBookingsIcon className="h-8 w-8" />
            <span className=" text-lg">My Bookings</span>
          </Link>
        </section>
        <section className="flex flex-col gap-4 border-b border-secondary-50 py-4 text-secondary-50">
          <h2 className="font-mono">My cars</h2>
          <Link onClick={handleLink} to="mycars" className="flex items-center gap-4">
            <CarsIcon className="h-8 w-8" />
            <span className=" text-lg">See My cars</span>
          </Link>
          <Link onClick={handleLink} to="mycarbookings" className="flex items-center gap-4">
            <ListIcon className="h-8 w-8" />
            <span className=" text-lg">{`My Car's Bookings`}</span>
          </Link>
          <Link onClick={handleLink} to="addcar" className="flex items-center gap-4">
            <CarPlusIcon className="h-8 w-8" />
            <span className=" text-lg">Add New Car</span>
          </Link>
        </section>
        <button onClick={handleLogout} className="flex items-center gap-4 py-4 text-secondary-50">
          <LogoutIcon className="h-8 w-8" />
          <span className=" text-lg">Log Out</span>
        </button>
      </section>
    </Transition>
  )
}
