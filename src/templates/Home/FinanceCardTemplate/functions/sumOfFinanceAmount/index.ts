import { FinanceDataProps } from 'global/types/FinancePropsType'
import { numberToPriceBrl } from 'global/functions/numberToPriceBrl'

export const sumOfFinanceAmount = (financeData: FinanceDataProps[]) => {
  const depositData = filterDepositData(financeData)
  const withdrawData = filterWithDrawData(financeData)
  const total = sumAmount(depositData) - sumAmount(withdrawData)

  return {
    totalPriceInBrl: numberToPriceBrl(total),
    priceBiggerThanZero: total >= 0
  }
}

const sumAmount = (data: FinanceDataProps[]) => {
  return data?.reduce((sum, finance) => {
    return sum + finance?.amount
  }, 0)
}

const filterDepositData = (data: FinanceDataProps[]) => {
  return data?.filter((finance) => finance?.type === 'deposit')
}

const filterWithDrawData = (data: FinanceDataProps[]) => {
  return data?.filter((finance) => finance?.type === 'withdraw')
}
