import { TextField, TextFieldProps } from '@mui/material'
import { Controller } from 'react-hook-form'

type TextControllerCustomProps = {
  name: string
  control: any
} & TextFieldProps

export function TextControllerCustom({
  name,
  control,
  ...props
}: TextControllerCustomProps) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <TextField
          error={!!error}
          sx={{ height: '64px' }}
          size="medium"
          helperText={error?.message ?? props.helperText}
          {...field}
          {...props}
        />
      )}
    />
  )
}
