import { FinanceDataProps } from 'global/types/FinancePropsType'
import { numberToPriceBrl } from 'global/functions/numberToPriceBrl'

export const sumOfDepositData = (data: FinanceDataProps[]) => {
  const depositData = filterDepositData(data)
  return numberToPriceBrl(sumAmount(depositData))
}

const sumAmount = (data: FinanceDataProps[]) => {
  return data?.reduce((sum, finance) => {
    return sum + finance?.amount
  }, 0)
}

const filterDepositData = (data: FinanceDataProps[]) => {
  return data?.filter((finance) => finance?.type === 'deposit')
}
