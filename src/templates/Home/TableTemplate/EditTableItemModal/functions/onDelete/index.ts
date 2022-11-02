import { deleteFinance } from 'service/deletes/deleteFinance'
import { getFinanceData } from 'service/gets/getFinanceData'

export async function onDelete(
  financeId: number,
  setData: any,
  setFilteredData: any,
  modalOpen: boolean,
  setModalOpen: any
) {
  const response = await deleteFinance(financeId)
  if (response?.status === 200) {
    const responseGet = await getFinanceData()

    if (responseGet) {
      setData(responseGet)
      setFilteredData(responseGet)

      setModalOpen(!modalOpen)
    }
  }
}
