import { api } from 'service/api'
import { FinanceDataProps } from 'global/types/FinancePropsType'

export const postFinanceData = async (data: FinanceDataProps) => {
  try {
    const response = await api.post('finances', data)
    if (response.status === 201) {
      alert('Dados enviados com sucesso!')
    } else {
      alert('Erro ao enviar dados!')
    }
    return response
  } catch (error) {
    console.log(error)
  }
}
