import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import HeaderCarIcon from '../assets/HeaderCarIcon'
import ProfileIcon from '../assets/ProfileIcon'
import MenuCard from './MenuCard'
import { HeaderProps } from '../util/types'

export default function Header({ isMenuOpen, handleMenuVisibility }: HeaderProps): ReactElement {
  return (
    <section className="fixed top-0 z-10 w-full rounded-b-lg bg-primary-200 px-4 py-2">
      <div className="flex items-center justify-between text-secondary-50">
        <span className="w-10  cursor-pointer text-lg" onClick={handleMenuVisibility}>
          {isMenuOpen ? 'Close' : 'Menu'}
        </span>
        <div className="relative">
          <Link to="/home" className="relative z-10">
            <HeaderCarIcon className="h-11 w-11" />
          </Link>
          <div className="absolute left-[-13px] top-1 h-[72px] w-[72px] rounded-full bg-primary-200 md:-top-1"></div>
        </div>
        <ProfileIcon />
      </div>
      <div>
        <MenuCard handleLink={handleMenuVisibility} isMenuOpen={isMenuOpen} />
      </div>
    </section>
  )
}
