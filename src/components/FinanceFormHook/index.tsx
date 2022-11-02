import { Stack, Button, Box } from '@mui/material'
import { useForm } from 'react-hook-form'

import { TextControllerCustom } from 'components/FinanceFormHook/TextControllerCustom'
import { RegisterTypeButtonsTemplate } from './RegisterTypeButtons'

type defaultValuesType = {
  id?: number
  title: string
  amount: number
  category: string
  date: string
  type?: 'deposit' | 'withdraw'
}

type FinanceFormHookProps = {
  resolver: any
  defaultValues?: defaultValuesType
  onSubmit: (
    data: defaultValuesType,
    setFinanceData: any,
    setFilteredData: any
  ) => Promise<any>
  setFinanceData: any
  setFilteredData: any
}

export function FinanceFormHook({
  resolver,
  defaultValues,
  onSubmit,
  setFinanceData,
  setFilteredData
}: FinanceFormHookProps) {
  const methods = useForm({ defaultValues, resolver })

  return (
    <Box
      component="form"
      autoComplete="off"
      onSubmit={methods.handleSubmit((data) =>
        onSubmit(data, setFinanceData, setFilteredData)
      )}
    >
      <Stack paddingY="50px" spacing={2.5}>
        <TextControllerCustom
          name="title"
          label="Título"
          control={methods.control}
        />
        <TextControllerCustom
          name="amount"
          label="Preço"
          type="number"
          control={methods.control}
          InputProps={{ startAdornment: 'R$' }}
        />
        <RegisterTypeButtonsTemplate methods={methods} />
        <TextControllerCustom
          name="category"
          label="Categoria"
          control={methods.control}
        />
        <Button
          sx={{ height: '60px' }}
          color="success"
          variant="contained"
          type="submit"
        >
          Cadastrar
        </Button>
      </Stack>
    </Box>
  )
}
