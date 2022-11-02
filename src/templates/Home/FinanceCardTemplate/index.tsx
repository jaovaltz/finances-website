/* eslint-disable multiline-ternary */
import { useEffect, useState } from 'react'

import { Grid } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

import { FinanceCard } from 'components/FinanceCard'

import { FinanceDataProps } from 'global/types/FinancePropsType'
import { sumOfFinanceAmount } from './functions/sumOfFinanceAmount'
import { sumOfDepositData } from './functions/sumOfDepositData'
import { sumOfWithdrawData } from './functions/sumOfWithdrawData'

type FinanceCardTemplateProps = {
  data: FinanceDataProps[]
}

export function FinanceCardTemplate({ data }: FinanceCardTemplateProps) {
  const [totalAmount, setTotalAmount] = useState({
    totalPriceInBrl: '0',
    priceBiggerThanZero: false
  })
  const [depositAmount, setDepositAmount] = useState('0')
  const [withdrawAmount, setWithdrawAmount] = useState('0')

  useEffect(() => {
    if (!data) {
      setTotalAmount({
        totalPriceInBrl: '0',
        priceBiggerThanZero: false
      })

      setDepositAmount('0')
      setWithdrawAmount('0')
      return
    }

    setTotalAmount(sumOfFinanceAmount(data))
    setDepositAmount(sumOfDepositData(data))
    setWithdrawAmount(sumOfWithdrawData(data))
  }, [data])

  return (
    <Grid
      container
      justifyContent="center"
      spacing={5}
      sx={{ marginTop: '-50px' }}
    >
      <Grid item sm={4}>
        <FinanceCard
          title="Entradas"
          price={depositAmount}
          icon={<ArrowCircleUpIcon color="secondary" />}
        />
      </Grid>
      <Grid item sm={4}>
        <FinanceCard
          title="Saídas"
          price={withdrawAmount}
          icon={<ArrowCircleDownIcon color="error" />}
        />
      </Grid>
      <Grid item sm={4}>
        <FinanceCard
          fontColor="white"
          title="Entradas"
          price={totalAmount?.totalPriceInBrl}
          sx={{
            backgroundColor: totalAmount?.priceBiggerThanZero
              ? '#33CC95'
              : '#E12312'
          }}
          icon={<AttachMoneyIcon color="info" />}
        />
      </Grid>
    </Grid>
  )
}
