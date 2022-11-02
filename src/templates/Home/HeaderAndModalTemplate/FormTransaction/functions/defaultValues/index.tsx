import { FinanceDataProps } from 'global/types/FinancePropsType'

export const defaultValues: FinanceDataProps = {
  title: '',
  amount: 0,
  category: '',
  date: new Date().toISOString().slice(0, 10),
  type: undefined
}
