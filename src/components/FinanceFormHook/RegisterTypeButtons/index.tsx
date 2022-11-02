import { UseFormReturn } from 'react-hook-form'
import { Grid, Typography } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'

import { ButtonControllerCustom } from 'components/ButtonControllerCustom'
import { FinanceDataProps } from 'global/types/FinancePropsType'

type RegisterTypeButtonsTemplateProps = {
  methods: UseFormReturn<FinanceDataProps, any>
}

export function RegisterTypeButtonsTemplate({
  methods
}: RegisterTypeButtonsTemplateProps) {
  return (
    <Grid container justifyContent="center" spacing={0.4}>
      <Grid item xs={6}>
        <ButtonControllerCustom
          color={methods.watch('type') === 'deposit' ? 'secondary' : 'info'}
          onClick={() => methods.setValue('type', 'deposit')}
        >
          <ArrowCircleUpIcon color="success" />
          Entrada
        </ButtonControllerCustom>
      </Grid>
      <Grid item xs={6}>
        <ButtonControllerCustom
          color={methods.watch('type') === 'withdraw' ? 'error' : 'info'}
          onClick={() =>
            methods.setValue('type', 'withdraw', { shouldDirty: true })
          }
        >
          <ArrowCircleDownIcon color="warning" />
          Saída
        </ButtonControllerCustom>
      </Grid>
      <Typography color="error">
        {methods.formState.errors.type?.message}
      </Typography>
    </Grid>
  )
}
