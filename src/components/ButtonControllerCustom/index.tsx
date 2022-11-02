import { ReactNode } from 'react'
import { Button, ButtonProps } from '@mui/material'

type ButtonControllerCustomProps = {
  children: ReactNode
  handleChange?: any
} & ButtonProps

export function ButtonControllerCustom({
  children,
  handleChange,
  ...props
}: ButtonControllerCustomProps) {
  return (
    <Button
      fullWidth={true}
      variant="contained"
      color={'info'}
      {...props}
      sx={{ height: '64px' }}
    >
      {children}
    </Button>
  )
}
