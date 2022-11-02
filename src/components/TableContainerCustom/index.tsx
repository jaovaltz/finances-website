import { ReactNode } from 'react'
import { TableContainer, Table, TableContainerProps } from '@mui/material'

type TableContainerCustomProps = {
  children: ReactNode
} & TableContainerProps

export function TableContainerCustom({
  children,
  ...props
}: TableContainerCustomProps) {
  return (
    <TableContainer {...props}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {children}
      </Table>
    </TableContainer>
  )
}
