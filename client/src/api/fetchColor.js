import axiosWithAuth from './axiosWithAuth'

export default async function fetchColors() {
  return await axiosWithAuth().get('/colors')
}