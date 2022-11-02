import { useState } from 'react'
import ListIcon from '@mui/icons-material/List'

import { Searchbar } from 'components/Searchbar'
import { MenuCustom } from 'components/MenuCustom'

import { FinanceDataProps } from 'global/types/FinancePropsType'
import { searchQuery } from './functions/searchQuery'
import { Button } from '@mui/material'

type SearchTemplateProps = {
  setData: any
  financeData: FinanceDataProps[]
}

export function SearchTemplate({ financeData, setData }: SearchTemplateProps) {
  const [filters, setFilters] = useState({
    title: true,
    amount: true,
    category: true,
    date: true
  })
  const [sentence, setSentence] = useState('')

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  return (
    <>
      <Searchbar
        setSentence={setSentence}
        filters={filters}
        startAdornment={
          <Button
            id="menu-button"
            onClick={(e) => setAnchorEl(e.currentTarget)}
          >
            <ListIcon sx={{ cursor: 'pointer' }} />
          </Button>
        }
        data={financeData}
        setData={setData}
        searchQuery={searchQuery}
      />
      <MenuCustom
        searchQuery={searchQuery}
        data={financeData}
        setData={setData}
        sentence={sentence}
        filters={filters}
        setFilters={setFilters}
        open={open}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        buttonId={'menu-button'}
      />
    </>
  )
}
