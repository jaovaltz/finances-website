import { api } from 'service/api'

export const putFinanceData = async (data: any) => {
  const response = await api.put(`/finances/${data.id}`, data)
  if (response.status === 200) {
    alert('Dados atualizados com sucesso!')
  } else {
    alert('Erro ao atualizar os dados')
  }
  return response
}
