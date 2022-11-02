import { api } from 'service/api'

export async function deleteFinance(financeId: number) {
  try {
    const response = await api.delete(`finances/${financeId}`)
    if (response.status === 200) {
      alert('Dados deletados com sucesso!')
    } else {
      alert('Erro ao deletar dados!')
    }
    return response
  } catch (error) {
    console.log(error)
  }
}
