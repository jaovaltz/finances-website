type tableColumn = {
  id: string
  label: string
  align: 'left' | 'right'
}

export const columns: tableColumn[] = [
  {
    label: 'Título',
    id: 'title',
    align: 'left'
  },
  {
    label: 'Preço',
    id: 'amount',
    align: 'right'
  },
  {
    label: 'Categoria',
    id: 'category',
    align: 'right'
  },
  {
    label: 'Data',
    id: 'date',
    align: 'right'
  }
]
