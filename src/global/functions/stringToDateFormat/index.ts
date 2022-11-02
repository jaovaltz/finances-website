export const stringToDateFormat = (date: string) => {
  const newDate = new Date(date)
  return Intl.DateTimeFormat('pt-BR').format(newDate)
}
