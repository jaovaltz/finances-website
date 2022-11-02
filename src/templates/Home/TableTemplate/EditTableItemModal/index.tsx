import React from 'react'
import { Button, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'
import DeleteIcon from '@mui/icons-material/Delete'

import { FinanceFormHook } from 'components/FinanceFormHook'
import { ModalCustom } from 'components/ModalCustom'

import { onSubmit } from './functions/onSubmit'
import { resolver } from './functions/resolver'
import { onDelete } from './functions/onDelete'

type EditTableItemProps = {
  modalOpen: boolean
  itemData?: any
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  setFinanceData: any
  setFilteredData: any
}

export function EditTableItemModal({
  modalOpen,
  setModalOpen,
  itemData,
  setFinanceData,
  setFilteredData
}: EditTableItemProps) {
  return (
    <ModalCustom open={modalOpen}>
      <>
        <Stack justifyContent="space-between" direction="row">
          <Typography fontSize="24px">Editar transação</Typography>
          <Stack direction="row">
            <Button
              onClick={() =>
                onDelete(
                  itemData.id,
                  setFinanceData,
                  setFilteredData,
                  modalOpen,
                  setModalOpen
                )
              }
            >
              <DeleteIcon color="error" />
            </Button>
            <Button onClick={() => setModalOpen(!modalOpen)}>
              <CloseIcon color="disabled" />
            </Button>
          </Stack>
        </Stack>
        <FinanceFormHook
          defaultValues={itemData}
          resolver={resolver}
          onSubmit={onSubmit}
          setFinanceData={setFinanceData}
          setFilteredData={setFilteredData}
        />
      </>
    </ModalCustom>
  )
}
