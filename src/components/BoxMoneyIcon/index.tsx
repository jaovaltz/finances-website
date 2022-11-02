import { Box, BoxProps } from '@mui/material'

import AttachMoneyIcon from '@mui/icons-material/AttachMoney'

type BoxMoneyIconProps = {
  iconSize?: 'large' | 'medium' | 'small'
} & BoxProps

export function BoxMoneyIcon({ iconSize, ...props }: BoxMoneyIconProps) {
  return (
    <Box
      bgcolor={props.bgcolor ?? '#33CC95'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      width={props.width ?? 40}
      height={props.height ?? 40}
      borderRadius={80}
      {...props}
    >
      <AttachMoneyIcon fontSize={iconSize ?? 'large'} color={'info'} />
    </Box>
  )
}
