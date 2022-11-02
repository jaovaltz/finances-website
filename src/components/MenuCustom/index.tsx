import { Checkbox, FormControlLabel, FormGroup, Menu } from '@mui/material'
import { FinanceDataProps } from 'global/types/FinancePropsType'

type MenuCustomProps = {
  open: boolean
  setAnchorEl?: any
  anchorEl?: any
  buttonId?: string
  filters: any
  setFilters: any
  sentence: string
  setData: any
  data: FinanceDataProps[]
  searchQuery: (
    sentence: string,
    data: FinanceDataProps[],
    setData: any,
    filters?: any
  ) => void
}

export function MenuCustom({
  open,
  setAnchorEl,
  anchorEl,
  filters,
  setFilters,
  buttonId,
  data,
  setData,
  sentence,
  searchQuery
}: MenuCustomProps) {
  return (
    <Menu
      id="menu-custom"
      MenuListProps={{ 'aria-labelledby': buttonId }}
      open={open}
      anchorEl={anchorEl}
      onClose={() => setAnchorEl(null)}
    >
      <FormGroup sx={{ margin: '10px' }}>
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.title}
              onChange={() => {
                setFilters({ ...filters, title: !filters.title })
                searchQuery(sentence, data, setData, {
                  ...filters,
                  title: !filters.title
                })
              }}
            />
          }
          label="Titulo"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.amount}
              onChange={() => {
                setFilters({ ...filters, amount: !filters.amount })
                searchQuery(sentence, data, setData, {
                  ...filters,
                  amount: !filters.amount
                })
              }}
            />
          }
          label="Preco"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.category}
              onChange={() => {
                setFilters({ ...filters, category: !filters.category })
                console.log(sentence)
                searchQuery(sentence, data, setData, {
                  ...filters,
                  cateogory: !filters.category
                })
              }}
            />
          }
          label="Categoria"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filters.date}
              onChange={() => {
                setFilters({ ...filters, date: !filters.date })
                searchQuery(sentence, data, setData, {
                  ...filters,
                  date: !filters.date
                })
              }}
            />
          }
          label="Data"
        />
      </FormGroup>
    </Menu>
  )
}
