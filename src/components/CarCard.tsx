import ProfileIcon from '../assets/ProfileIcon'
import CarIcon from '../assets/CarIcon'
import { CarCardProps } from '../util/types'
import { Link } from 'react-router-dom'
import { ReactElement } from 'react'

export default function CarCard({
  id,
  image,
  carName,
  ownerName,
  carTypeName,
  car,
}: CarCardProps): ReactElement {
  return (
    <section className="px-8">
      <div className="flex flex-row gap-4">
        <img src={image} className="w-1/2 object-contain" alt={`${carTypeName} car`} />

        <div className="flex flex-col gap-3 pr-3">
          <p className="w-28 truncate font-serif text-xl font-medium text-secondary-50 md:text-2xl">
            {carName}
          </p>
          <p className="flex items-center gap-2 text-base font-normal text-secondary-50">
            <ProfileIcon />
            {ownerName}
          </p>
          <p className="flex items-center gap-2 text-base font-normal text-secondary-50">
            <CarIcon />
            {carTypeName}
          </p>
          <Link
            to={`${id}`}
            state={{ details: car, carName, carImage: image, ownerName }}
            className="pb-2 pt-3 text-base font-medium text-success-100"
          >
            Show details
          </Link>
        </div>
      </div>
    </section>
  )
}
