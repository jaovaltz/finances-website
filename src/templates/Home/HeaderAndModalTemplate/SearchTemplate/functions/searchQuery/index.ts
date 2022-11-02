import { Dispatch, SetStateAction } from 'react'
import { FinanceDataProps } from 'global/types/FinancePropsType'

import { stringToDateFormat } from 'global/functions/stringToDateFormat'

export async function searchQuery(
  sentence: string,
  data: FinanceDataProps[],
  setFinanceData: Dispatch<SetStateAction<FinanceDataProps[]>>,
  filters: any
) {
  if (checkIfFiltersAreFalse(filters)) {
    setFinanceData(data)
  } else {
    setFinanceData(filterDataByFilters(data, filters, sentence))
  }
}

function checkIfFiltersAreFalse(filters: any) {
  return Object.values(filters).every((value) => value === false)
}

function filterDataByFilters(
  data: FinanceDataProps[],
  filters: any,
  sentence: string
) {
  const lowerSentence = sentence.toLocaleLowerCase()

  return data.filter(
    (value: FinanceDataProps) =>
      (filters.title && value.title.toLowerCase().includes(lowerSentence)) ||
      (filters.amount && value.amount.toString().includes(lowerSentence)) ||
      (filters.date &&
        stringToDateFormat(value.date).includes(lowerSentence)) ||
      (filters.category && value.category.toLowerCase().includes(lowerSentence))
  )
}
