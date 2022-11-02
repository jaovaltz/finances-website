import React from 'react'

export function handleClickRow(
  setCurrentId: React.Dispatch<React.SetStateAction<number | undefined>>,
  id: number,
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>,
  modalOpen: boolean
) {
  setCurrentId(id)
  setModalOpen(!modalOpen)
}
