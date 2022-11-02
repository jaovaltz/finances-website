import { ReactNode } from 'react'
import { Button, ButtonProps } from '@mui/material'

type NewFinanceButtonProps = {
  children: ReactNode
} & ButtonProps

export function NewFinanceButton({
  children,
  ...props
}: NewFinanceButtonProps) {
  return (
    <Button
      sx={{ backgroundColor: 'rgba(105, 51, 255, 0.7)' }}
      variant="contained"
      size="large"
      {...props}
    >
      {children}
    </Button>
  )
}
