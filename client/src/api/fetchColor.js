import { axiosWithAuth } from '../components/axiosWithAuth'

export default async function fetchColors() {
  return await axiosWithAuth().get('/colors')
}