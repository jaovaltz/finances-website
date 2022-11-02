import { api } from 'service/api'

export const getFinanceData = async () => {
  try {
    const response = await api.get('finances')
    return response.data
  } catch (error) {
    console.log(error)
    return []
  }
}
