import { FinanceDataProps } from 'global/types/FinancePropsType'
import { getFinanceData } from 'service/gets/getFinanceData'
import { postFinanceData } from 'service/posts/postFinanceData'

export const onSubmit = async (
  data: FinanceDataProps,
  setFinanceData: any,
  setFilteredData: any
) => {
  const response = await postFinanceData(data)

  if (response?.status === 201) {
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
