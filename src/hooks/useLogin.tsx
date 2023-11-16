import { apiUrl } from '../util/apiUrl'
import useAxios from 'axios-hooks'
import { LoginResponseDTO } from '../util/api'

export default function useLogin() {
  return useAxios<LoginResponseDTO>(
    {
      url: `${apiUrl}/auth`,
      method: 'POST',
    },
    {
      manual: true,
    },
  )
}
