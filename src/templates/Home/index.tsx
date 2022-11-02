import { Container, Stack } from '@mui/material'

import { HeaderAndModalTemplate } from 'templates/Home/HeaderAndModalTemplate'
import { FinanceCardTemplate } from 'templates/Home/FinanceCardTemplate'
import { TableTemplate } from 'templates/Home/TableTemplate'

import { useHome } from 'hooks/Home'

export function HomeTemplate() {
  const {
    financeData,
    setFinanceData,
    financeDataFiltered,
    setFinanceDataFiltered
  } = useHome()

  return (
    <Stack>
      <HeaderAndModalTemplate
        financeData={financeData}
        setFinanceData={setFinanceData}
        setFilteredData={setFinanceDataFiltered}
      />
      <Stack>
        <Container maxWidth={'lg'}>
          <Stack spacing={5}>
            <FinanceCardTemplate data={financeDataFiltered} />
            <TableTemplate
              rows={financeDataFiltered}
              setFinanceData={setFinanceData}
              setFilteredData={setFinanceDataFiltered}
            />
          </Stack>
        </Container>
      </Stack>
    </Stack>
  )
}
