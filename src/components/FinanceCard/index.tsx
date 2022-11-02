import { ReactNode } from 'react'

import { Card, CardContent, CardProps, Stack, Typography } from '@mui/material'

type FinanceCardProps = {
  title?: string
  price?: string
  fontColor?: string
  icon?: ReactNode
} & CardProps

export function FinanceCard({
  title,
  price,
  icon,
  fontColor,
  ...props
}: FinanceCardProps) {
  return (
    <Card variant="outlined" {...props}>
      <CardContent>
        <Stack spacing={2}>
          <Stack
            alignItems="center"
            direction="row"
            justifyContent="space-between"
          >
            <Typography color={fontColor ?? 'black'} fontSize="18px">
              {title}
            </Typography>
            {icon}
          </Stack>
          <Typography color={fontColor ?? 'black'} fontSize="36px">
            {price}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  )
}
