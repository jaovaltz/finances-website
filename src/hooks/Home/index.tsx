import { useCallback, useEffect, useState } from 'react'

import { FinanceDataProps } from 'global/types/FinancePropsType'
import { getFinanceData } from 'service/gets/getFinanceData'

export function useHome() {
  const [financeData, setFinanceData] = useState<FinanceDataProps[]>([])
  const [financeDataFiltered, setFinanceDataFiltered] = useState<
    FinanceDataProps[]
  >([])

  const getFinanceDataFromApi = useCallback(() => {
    getFinanceData().then((data) => {
      setFinanceData(data)
      setFinanceDataFiltered(data)
    })
  }, [])

  useEffect(() => {
    getFinanceDataFromApi()
  }, [getFinanceDataFromApi])

  return {
    financeData,
    setFinanceData,
    financeDataFiltered,
    setFinanceDataFiltered
  }
}
