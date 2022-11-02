import { FinanceDataProps } from 'global/types/FinancePropsType'
import { numberToPriceBrl } from 'global/functions/numberToPriceBrl'

export const sumOfWithdrawData = (data: FinanceDataProps[]) => {
  const withdrawData = filterWithdrawData(data)
  return numberToPriceBrl(sumAmount(withdrawData))
}

const filterWithdrawData = (data: FinanceDataProps[]) => {
  return data?.filter((finance) => finance?.type === 'withdraw')
}

const sumAmount = (data: FinanceDataProps[]) => {
  return data?.reduce((sum, finance) => {
    return sum + finance?.amount
  }, 0)
}
