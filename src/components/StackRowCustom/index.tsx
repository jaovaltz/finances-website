import { ReactNode } from 'react'

import { Stack, StackProps } from '@mui/material'

type StackRowCustomProps = {
  children: ReactNode
} & StackProps

export function StackRowCustom({ children, ...props }: StackRowCustomProps) {
  return (
    <Stack direction="row" alignItems="center" {...props}>
      {children}
    </Stack>
  )
}
