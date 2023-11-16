import { Link, useNavigate, useParams } from 'react-router-dom'
import CarInfo from '../../components/CarInfo'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'
import { ReactElement } from 'react'
import { useCarTypes, useCars, useUsers } from '../../hooks'
import getOwnerInfo from '../../util/getOwnerInfo'
import getCarTypeInfo from '../../util/getCarTypeInfo'
import Spinner from '../../components/Spinner'
export default function CarDetails(): ReactElement {
  const params = useParams()
  const navigate = useNavigate()
  const carId = Number(params.id)
  const [{ data: carsData, loading }] = useCars()
  const [{ data: carTypeData }] = useCarTypes()
  const [{ data: carOwnerInfo }] = useUsers()
  const carDetailsData = carsData?.find(carData => carData.id === carId)
  if (!loading && !carDetailsData) {
    throw navigate('/404')
  }
  if (!carOwnerInfo || !carTypeData) return <Spinner />
  const ownerName = carDetailsData ? getOwnerInfo(carDetailsData.ownerId, carOwnerInfo) : ''
  const { name, imageUrl } = carDetailsData
    ? getCarTypeInfo(carDetailsData.carTypeId, carTypeData)
    : { name: '', imageUrl: '' }
  const carInfo = carDetailsData ? (
    <CarInfo
      carImage={imageUrl}
      carName={carDetailsData.name}
      ownerName={ownerName}
      carTypeName={name}
      licensePlate={carDetailsData.licensePlate ? carDetailsData.licensePlate : undefined}
      horsePower={carDetailsData.horsepower ? carDetailsData.horsepower : undefined}
      fuelType={carDetailsData.fuelType}
      info={carDetailsData.info ? carDetailsData.info : undefined}
    />
  ) : (
    <h1>...</h1>
  )

  return (
    <main className="pt-16">
      <div className="relative mb-8 mt-10 flex items-center justify-center gap-20 px-5">
        <Link to=".." relative="path">
          <ChevronBackIcon className="absolute left-4 top-2 h-6 w-6 text-success-100" />
        </Link>
        <h2 className="-translate-x-4 font-serif text-3xl uppercase text-secondary-50">details</h2>
      </div>
      {carInfo}
    </main>
  )
}
