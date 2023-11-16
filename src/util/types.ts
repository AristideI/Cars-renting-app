import { Dispatch, ReactNode, SetStateAction } from 'react'
import { CarDto } from './api'
import { UseFormRegister, UseFormHandleSubmit, FieldErrors } from 'react-hook-form'
import { NewCarDto } from './api'

interface CarCardProps {
  id: number
  image: string
  carName: string
  ownerName: string
  carTypeName: string
  car: CarDto
  children?: ReactNode
}
interface CarInfoProps {
  carImage: string
  carName: string
  ownerName: string
  carTypeName: string
  licensePlate?: string
  horsePower?: number
  fuelType: string
  info?: string
}
interface MenuCardProps {
  handleLink: () => void
  isMenuOpen: boolean
}
interface ButtonProps {
  buttonType?: 'button' | 'submit' | 'reset'
  text: string
  isLoading?: boolean
  clickHandler: (event?: React.MouseEvent<HTMLButtonElement>, id?: number) => void
  variant?: 'primary' | 'secondary' | 'warning'
  id?: number
}
interface HeaderProps {
  isMenuOpen: boolean
  handleMenuVisibility: () => void
}
interface AddCarFormProps {
  register: UseFormRegister<NewCarDto>
  errors: FieldErrors<NewCarDto>
  handleAdd: (newCarData: NewCarDto) => void
  handleSubmit: UseFormHandleSubmit<NewCarDto, undefined>
  divStyles: string
  inputStyles: string
  handleCancel: () => void
  isLoading: boolean
  setIsLoading: Dispatch<SetStateAction<boolean>>
}
interface MyCarCardProps {
  id: number
  image: string
  carName: string
  ownerName: string
  carTypeName: string
  car: CarDto
  isDialogOpen: boolean
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>
  setDeleteId: Dispatch<SetStateAction<number>>
}
interface DialogProps {
  isDialogOpen: boolean
  deleteId: number
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>
}
interface LoginDataProps {
  username: string
  password: string
}

export type {
  CarCardProps,
  CarInfoProps,
  MenuCardProps,
  ButtonProps,
  HeaderProps,
  AddCarFormProps,
  MyCarCardProps,
  DialogProps,
  LoginDataProps,
}
