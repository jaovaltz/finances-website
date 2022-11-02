import { useState } from 'react'
import { Button, Stack, Typography } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

import { NewFinanceButton } from 'components/NewFinanceButton'
import { StackRowCustom } from 'components/StackRowCustom'
import { ModalCustom } from 'components/ModalCustom'
import { FinanceFormHook } from 'components/FinanceFormHook'

import { defaultValues } from './functions/defaultValues'
import { resolver } from './functions/resolver'
import { onSubmit } from './functions/onSubmit'

type FormTransactionProps = {
  setFinanceData: any
  setFilteredData: any
}

export function FormTransaction({
  setFinanceData,
  setFilteredData
}: FormTransactionProps) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <StackRowCustom>
      <NewFinanceButton onClick={() => setModalOpen(!modalOpen)}>
        Nova transição
      </NewFinanceButton>
      <ModalCustom open={modalOpen}>
        <>
          <Stack justifyContent="space-between" direction="row">
            <Typography fontSize="24px">Cadastrar transação</Typography>
            <Button onClick={() => setModalOpen(!modalOpen)}>
              <CloseIcon color="disabled" />
            </Button>
          </Stack>
          <FinanceFormHook
            resolver={resolver}
            onSubmit={onSubmit}
            defaultValues={defaultValues}
            setFinanceData={setFinanceData}
            setFilteredData={setFilteredData}
          />
        </>
      </ModalCustom>
    </StackRowCustom>
  )
}
