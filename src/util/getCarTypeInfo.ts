import { CarTypeDto } from './api'

export default function getCarTypeInfo(id: number, carData: CarTypeDto[]) {
  const carType = carData.find(info => info.id === id) || { name: '', imageUrl: '' }
  return carType
}
