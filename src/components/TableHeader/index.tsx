import { TableHead, TableRow, TableCell, TableRowProps } from '@mui/material'

type tableColumn = {
  id: string
  label: string
  align: 'left' | 'right'
}

type TableHeaderProps = {
  columns: tableColumn[]
} & TableRowProps

export function TableHeader({ columns, ...props }: TableHeaderProps) {
  return (
    <TableHead>
      <TableRow {...props} sx={{ backgroundColor: '#E6DFDF' }}>
        {columns.map((column) => (
          <TableCell key={column.id} align={column.align}>
            {column.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}
