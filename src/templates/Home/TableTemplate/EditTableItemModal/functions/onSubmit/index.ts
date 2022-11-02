import { FinanceDataProps } from 'global/types/FinancePropsType'
import { getFinanceData } from 'service/gets/getFinanceData'
import { putFinanceData } from 'service/puts/putFinanceData'

export async function onSubmit(
  data: FinanceDataProps,
  setFinanceData: any,
  setFilteredData: any
) {
  const response = await putFinanceData(data)
  if (response.status === 200) {
    const responseGet = await getFinanceData()

    if (responseGet) {
      setFinanceData(responseGet)
      setFilteredData(responseGet)
    }
  } else {
    console.log('error')
  }
  return response?.data
}
