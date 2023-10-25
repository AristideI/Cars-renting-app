import { useCarTypes, useCars, useUser, useUsers } from '../../hooks'
import { UserDto } from '../../util/api'

interface Axios {
  loading: boolean
  error: unknown
  data: UserDto[]
}
export default function BookCar() {
  const [fetchAllCars] = useCars()
  const [fetchCarTypes] = useCarTypes()
  const [fetchUsers] = useUsers()
  const [fetchUser] = useUser(2)
  console.log(fetchUser)
  if (
    fetchAllCars.loading === true ||
    fetchCarTypes.loading === true ||
    fetchUsers.loading === true
  ) {
    return (
      <section className="grid h-[90vh] place-content-center overflow-hidden font-lora text-3xl text-white">
        LOADING ...
      </section>
    )
  }

  const allCars = fetchAllCars.data
  const carTypes = fetchCarTypes.data
  const users = fetchUsers.data
  // console.log(allCars, carTypes, users)
  return (
    <article className="text-lightGray">
      <section className="mt-8 flex items-center justify-between">
        <img src="/Back.png" alt="Back icon" />
        <p className="font-lora text-2xl">All Cars</p>
        <div className="h-1 w-2"></div>
      </section>
    </article>
  )
}
