import { Container, Stack } from '@mui/material'

import { StackRowCustom } from 'components/StackRowCustom'

import { LogoTemplate } from './LogoTemplate'
import { FormTransaction } from './FormTransaction'
import { SearchTemplate } from './SearchTemplate'

import { FinanceDataProps } from 'global/types/FinancePropsType'

type HeaderAndModalTemplateProps = {
  setFinanceData: any
  setFilteredData: any
  financeData: FinanceDataProps[]
}

export function HeaderAndModalTemplate({
  financeData,
  setFilteredData,
  setFinanceData
}: HeaderAndModalTemplateProps) {
  return (
    <Stack paddingY={6} sx={{ backgroundColor: '#5636d3' }}>
      <Container maxWidth="lg">
        <StackRowCustom justifyContent="space-between">
          <LogoTemplate />
          <SearchTemplate financeData={financeData} setData={setFilteredData} />
          <FormTransaction
            setFilteredData={setFilteredData}
            setFinanceData={setFinanceData}
          />
        </StackRowCustom>
      </Container>
    </Stack>
  )
}
