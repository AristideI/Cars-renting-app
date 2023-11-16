import { ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddCarForm from '../../components/AddCarForm'
import useAddCar from '../../hooks/useAddCar'
import { useForm } from 'react-hook-form'
import { NewCarDto } from '../../util/api'

export default function AddCar(): ReactElement {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()
  const [response, addCar] = useAddCar()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<NewCarDto>()

  const inputStyles =
    'bg-primary-50 rounded-full text-secondary-50 placeholder:text-secondary-50 placeholder:text-base py-3 px-8 w-full outline-none border-r-8 border-transparent'
  const divStyles = 'flex flex-col text-secondary-50 text-lg md:text-xl gap-2 relative'

  async function handleAdd(newCarData: NewCarDto) {
    setIsLoading(true)
    await addCar({
      data: {
        carTypeId: Number(newCarData.carTypeId),
        name: newCarData.name,
        fuelType: newCarData.fuelType,
        horsepower: Number(newCarData.horsepower),
        licensePlate: newCarData.plate,
        info: newCarData.info,
      },
    })
    if (!response.loading) navigate('/mycars')
  }

  function handleCancel() {
    setIsLoading(false)
    navigate('/mycars')
  }

  return (
    <section className="mx-auto mt-24 max-w-3xl px-3">
      <h1 className="text-center font-serif text-xl uppercase text-secondary-50">New car</h1>
      <AddCarForm
        inputStyles={inputStyles}
        divStyles={divStyles}
        register={register}
        errors={errors}
        handleSubmit={handleSubmit}
        handleAdd={handleAdd}
        handleCancel={handleCancel}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </section>
  )
}
