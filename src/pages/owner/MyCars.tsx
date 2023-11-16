import { ReactElement, useState } from 'react'
import { ChevronBackIcon } from '../../assets/ChevronBackIcon'
import { Link } from 'react-router-dom'
import MyCarCard from '../../components/MyCarCard'
import MyDialog from '../../components/MyDialog'
import Spinner from '../../components/Spinner'
import { useCars, useCarTypes, useUsers } from '../../hooks'
import { CarDto } from '../../util/api'
import getCarTypeInfo from '../../util/getCarTypeInfo'
import getOwnerInfo from '../../util/getOwnerInfo'
export default function MyCars(): ReactElement {
  const [isDialogOpen, setisDialogOpen] = useState(false)
  const [deleteId, setDeleteId] = useState(0)
  const ownerId = Number(localStorage.getItem('userId'))
  const [{ data: ownCarsData, loading: ownCarsLoading }] = useCars()
  const [{ data: carTypeData, loading: carTypeLoading }] = useCarTypes()
  const [{ data: carOwnerData, loading: carOwnerLoading }] = useUsers()
  if (ownCarsLoading || carTypeLoading || carOwnerLoading) return <Spinner />
  const myCarsList = ownCarsData?.filter((car: CarDto) => car.ownerId === ownerId)
  const myCarsData = myCarsList?.map(
    ({ id, carTypeId, name: carName, ownerId, fuelType, state }: CarDto) => {
      const { name, imageUrl } = getCarTypeInfo(carTypeId, carTypeData || [])
      const ownerName = getOwnerInfo(ownerId, carOwnerData || [])
      return (
        <section
          className="flex h-64 w-full items-center justify-center gap-4 rounded-md bg-primary-100 py-6 md:h-72 lg:w-[48%]"
          key={id}
        >
          <MyCarCard
            image={imageUrl}
            carName={carName}
            ownerName={ownerName}
            carTypeName={name}
            id={id}
            car={{ id, carTypeId, name, ownerId, fuelType, state }}
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setisDialogOpen}
            setDeleteId={setDeleteId}
          />
        </section>
      )
    },
  )
  return (
    <section className="relative">
      <div className="fixed w-full bg-primary-150 pt-20">
        <div className="relative mb-4 flex items-center justify-center gap-20 px-5">
          <Link to="/home">
            <ChevronBackIcon className="absolute left-4 top-5 h-6 w-6 text-success-100" />
          </Link>
          <h2 className="mt-5 -translate-x-4 font-serif text-3xl uppercase text-secondary-50">
            My cars
          </h2>
        </div>
      </div>
      <section className="mx-auto mb-8 flex w-full flex-col items-center justify-start gap-6 px-5 pb-12 pt-40 md:flex-wrap md:pb-20 lg:w-4/5 lg:flex-row">
        {myCarsData?.length ? (
          myCarsData
        ) : (
          <span className="mx-auto mt-36 text-2xl font-normal text-secondary-50">
            No cars available
          </span>
        )}
      </section>
      <div className="fixed inset-x-0 bottom-0  bg-primary-150">
        <div className="mx-auto my-2 px-5 md:my-5 lg:w-[35%] lg:px-0">
          <Link to="/addcar">
            <div className="w-full rounded-full bg-secondary-50 py-3 text-center font-mono text-lg text-primary-150">
              Add car
            </div>
          </Link>
        </div>
      </div>
      {isDialogOpen && (
        <section>
          <MyDialog
            isDialogOpen={isDialogOpen}
            setIsDialogOpen={setisDialogOpen}
            deleteId={deleteId}
          />
        </section>
      )}
    </section>
  )
}
