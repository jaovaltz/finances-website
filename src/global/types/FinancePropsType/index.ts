export type FinanceDataProps = {
  id?: number
  title: string
  amount: number
  category: string
  date: string
  type?: 'deposit' | 'withdraw'
}
