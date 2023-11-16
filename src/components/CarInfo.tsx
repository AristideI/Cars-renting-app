import CarIcon from '../assets/CarIcon'
import WarningIcon from '../assets/WarningIcon'
import FuelIcon from '../assets/FuelIcon'
import HorseIcon from '../assets/HorseIcon'
import LicensePlateIcon from '../assets/LicensePlateIcon'
import ProfileIcon from '../assets/ProfileIcon'
import { CarInfoProps } from '../util/types'
import { ReactElement } from 'react'
export default function CarInfo({
  carImage,
  carName,
  ownerName,
  carTypeName,
  licensePlate,
  horsePower,
  fuelType,
  info,
}: CarInfoProps): ReactElement {
  return (
    <main className="flex flex-col justify-center gap-4 text-secondary-50 md:flex-row md:items-center md:gap-0">
      <img src={carImage} alt={carTypeName} className="w-full object-contain md:-ml-32 md:w-2/5" />
      <div>
        <h1 className="mb-8 px-10 text-2xl text-secondary-50 md:text-3xl">{carName}</h1>
        <ul className="flex flex-col gap-3 px-10 text-lg">
          <li className="flex items-center gap-2">
            <ProfileIcon />
            {ownerName}
          </li>
          <li className="flex items-center gap-3">
            <CarIcon />
            {carTypeName}
          </li>
          {licensePlate && (
            <li className="flex items-center gap-3">
              <LicensePlateIcon className="h-6 w-6" />
              {licensePlate}
            </li>
          )}
          <li className="flex items-center gap-3">
            <HorseIcon />
            {horsePower}
          </li>
          <li className="flex items-center gap-3">
            <FuelIcon />
            {fuelType}
          </li>
          {info && (
            <li className="flex items-center gap-3 font-mono">
              <WarningIcon />
              {info}
            </li>
          )}
        </ul>
      </div>
    </main>
  )
}
