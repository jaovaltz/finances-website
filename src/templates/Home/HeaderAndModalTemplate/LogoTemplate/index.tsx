import { Typography } from '@mui/material'

import { BoxMoneyIcon } from 'components/BoxMoneyIcon'
import { StackRowCustom } from 'components/StackRowCustom'

export function LogoTemplate() {
  return (
    <StackRowCustom spacing={2}>
      <BoxMoneyIcon />
      <Typography variant="h1" fontSize="28px" color="white">
        dt money
      </Typography>
    </StackRowCustom>
  )
}
