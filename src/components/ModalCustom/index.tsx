import { ReactNode } from 'react'
import { Box, Container, Modal, ModalProps } from '@mui/material'
import { boxInsideModalStyle } from './styles'

type ModalCustomProps = {
  open: boolean
  children: ReactNode
} & ModalProps

export function ModalCustom({ open, children, ...props }: ModalCustomProps) {
  return (
    <Modal open={open} {...props}>
      <Box sx={boxInsideModalStyle}>
        <Container>
          <Box paddingY="30px">{children}</Box>
        </Container>
      </Box>
    </Modal>
  )
}
