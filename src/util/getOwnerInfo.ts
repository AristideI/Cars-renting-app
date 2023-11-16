import { UserDto } from './api'

export default function getOwnerInfo(ownerId: number, ownerData: UserDto[]) {
  const owner = ownerData.find(info => info.id === ownerId) || { name: '' }
  const { name: ownerName } = owner
  return ownerName
}
