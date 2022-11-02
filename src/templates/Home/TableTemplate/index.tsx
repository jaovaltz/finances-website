import { useState } from 'react'
import { TableBody, TableCell, TableRow, Typography } from '@mui/material'

import { TableContainerCustom } from 'components/TableContainerCustom'
import { TableHeader } from 'components/TableHeader'
import { FinanceDataProps } from 'global/types/FinancePropsType'

import { columns } from './functions/getColumns'
import { numberToPriceBrl } from 'global/functions/numberToPriceBrl'
import { stringToDateFormat } from 'global/functions/stringToDateFormat'
import { EditTableItemModal } from './EditTableItemModal'

type TableTemplateProps = {
  rows: FinanceDataProps[]
  setFinanceData: any
  setFilteredData: any
}

export function TableTemplate({
  rows,
  setFinanceData,
  setFilteredData
}: TableTemplateProps) {
  const [currentId, setCurrentId] = useState<number | undefined>()
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <TableContainerCustom sx={{ padding: '10px' }}>
        <TableHeader columns={columns}></TableHeader>
        <TableBody>
          {rows?.map((row, idx) => (
            <TableRow
              sx={{
                cursor: 'pointer',
                borderBottom: '3px solid #C4CDC4',
                '&:hover': { backgroundColor: '#9BA49C' }
              }}
              onClick={() => {
                setModalOpen(!modalOpen)
                setCurrentId(row?.id)
              }}
              key={idx}
            >
              <TableCell>
                <Typography>{row.title}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  color={row.type === 'deposit' ? 'secondary' : 'error'}
                >
                  {row.type === 'withdraw' ? '-' : ''}{' '}
                  {numberToPriceBrl(row.amount)}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography sx={{ color: 'gray' }}>{row.category}</Typography>
              </TableCell>
              <TableCell align="right">
                <Typography sx={{ color: 'gray' }}>
                  {stringToDateFormat(row.date)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <EditTableItemModal
          itemData={rows?.find((item) => item?.id === currentId)}
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          setFinanceData={setFinanceData}
          setFilteredData={setFilteredData}
        />
      </TableContainerCustom>
    </>
  )
}
