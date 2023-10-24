import { useState } from 'react'
import { Link } from 'react-router-dom'
import CarIcon2 from '../assets/CarIcon2'
import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'
import CarsIcon from '../assets/CarsIcon'
import CarPlusIcon from '../assets/CarPlusIcon'
import ListIcon from '../assets/ListIcon'
import LogoutIcon from '../assets/LogoutIcon'
import MyBookings from '../assets/MyBookingsIcon'

export default function Header() {
  const [menuOption, setMenuOption] = useState(false)
  function handleMenu() {
    setMenuOption(prev => !prev)
  }
  function handleLink() {
    setMenuOption(prev => !prev)
  }
  return (
    <section className="relative h-[10vh] w-full rounded-b-lg bg-darkBlue px-4 py-2 md:h-[8vh]">
      <div className="flex items-center justify-between text-lightGray">
        <span className="cursor-pointer font-interRegular text-lg" onClick={handleMenu}>
          {menuOption ? 'Close' : 'Menu'}
        </span>
        <div className="relative z-10">
          <CarIcon2 />
          <div className="absolute left-[-13px] top-1 -z-20 h-[72px] w-[72px] rounded-full bg-darkBlue md:-top-1"></div>
        </div>
        <ProfileIcon />
      </div>
      {menuOption && (
        <section className={`menu-animation ${menuOption ? 'menuIn' : 'menuOut'} px-5`}>
          <section className="flex flex-col gap-4 border-b border-lightGray py-4 text-lightGray">
            <Link
              onClick={handleLink}
              to="bookcar"
              className="flex items-center gap-4 text-lightGray"
            >
              <CarIcon className="h-8 w-8" />
              <p className="font-interRegular text-lg">Book A Car</p>
            </Link>
            <Link
              onClick={handleLink}
              to="mybooking"
              className="flex items-center gap-4 text-lightGray"
            >
              <MyBookings className="h-8 w-8" />
              <p className="font-interRegular text-lg">My Bookings</p>
            </Link>
          </section>
          <section className="flex flex-col gap-4 border-b border-lightGray py-4 text-lightGray">
            <h2 className="font-interBold text-lightGray">My cars</h2>
            <Link
              onClick={handleLink}
              to="mycars"
              className="flex items-center gap-4 text-lightGray"
            >
              <CarsIcon />
              <p className="font-interRegular text-lg">See My cars</p>
            </Link>
            <Link
              onClick={handleLink}
              to="mycarbookings"
              className="flex items-center gap-4 text-lightGray"
            >
              <ListIcon />
              <p className="font-interRegular text-lg">{`My Car's Bookings`}</p>
            </Link>
            <Link
              onClick={handleLink}
              to="addcar"
              className="flex items-center gap-4 text-lightGray"
            >
              <CarPlusIcon className="h-8 w-8" />
              <p className="font-interRegular text-lg">Add New Car</p>
            </Link>
          </section>
          <Link
            onClick={handleLink}
            to="login"
            className="flex items-center gap-4 py-4 text-lightGray"
          >
            <LogoutIcon />
            <p className="font-interRegular text-lg">Log Out</p>
          </Link>
        </section>
      )}
    </section>
  )
}
