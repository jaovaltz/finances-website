import { ReactNode } from 'react'
import { TextField, TextFieldProps, Paper } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

type SearchbarProps = {
  setData?: any
  filters?: any
  data: any
  startAdornment: ReactNode
  setSentence: any
  searchQuery: (
    sentence: string,
    data: any,
    setData: any,
    filters?: any
  ) => void
} & TextFieldProps

export function Searchbar({
  data,
  setData,
  startAdornment,
  searchQuery,
  filters,
  setSentence,
  ...props
}: SearchbarProps) {
  return (
    <Paper>
      <TextField
        variant="outlined"
        autoComplete="off"
        color="primary"
        placeholder="Pesquisar..."
        size="medium"
        InputProps={{
          startAdornment,
          endAdornment: <SearchIcon />
        }}
        onChange={(e) => {
          setSentence(e.target.value) ??
            searchQuery(e.target.value, data, setData, filters)
        }}
        {...props}
      />
    </Paper>
  )
}
