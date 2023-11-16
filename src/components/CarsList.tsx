import { useCarTypes, useCars, useUsers } from '../hooks'
import getCarTypeInfo from '../util/getCarTypeInfo'
import getOwnerInfo from '../util/getOwnerInfo'
import { CarDto } from '../util/api'
import Spinner from './Spinner'
import CarCard from './CarCard'
import { ReactElement } from 'react'
import { Link } from 'react-router-dom'
import { ChevronBackIcon } from '../assets/ChevronBackIcon'

export default function CarsList(): ReactElement {
  const [{ data: carsData }] = useCars()
  const [carInfo] = useCarTypes()
  const [carOwnerInfo] = useUsers()
  const carData = carInfo.data
  const ownerData = carOwnerInfo.data
  if (carInfo.loading || carOwnerInfo.loading) return <Spinner />
  const carsListData = carsData?.map((car: CarDto) => {
    const { name, imageUrl } = getCarTypeInfo(car.carTypeId, carData || [])
    const ownerName = getOwnerInfo(car.ownerId, ownerData || [])

    return (
      <section
        className="flex h-64 w-full items-center justify-center gap-4 rounded-md bg-primary-100 py-6 md:h-72 lg:w-[35%]"
        key={car.id}
      >
        <CarCard
          image={imageUrl}
          carName={car.name}
          ownerName={ownerName}
          carTypeName={name}
          id={car.id}
          car={car}
        />
      </section>
    )
  })
  return (
    <>
      <div className="fixed mt-10 w-full bg-primary-150 pt-10">
        <div className="relative mb-4 mt-5 flex items-center justify-center gap-20 px-5">
          <Link to="/home">
            <ChevronBackIcon className="absolute left-4 top-2 h-6 w-6 text-success-100" />
          </Link>
          <h2 className="-translate-x-4 font-serif text-3xl uppercase text-secondary-50">
            all cars
          </h2>
        </div>
      </div>
      <section className="mb-8 flex flex-col items-center justify-center gap-6 px-5 pt-40 md:flex-wrap lg:flex-row">
        {carsListData}
      </section>
    </>
  )
}
