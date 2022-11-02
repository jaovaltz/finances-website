import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const rules = yup.object({
  title: yup.string().required('É necessário informar o nome').trim(),
  amount: yup
    .number()
    .required('É necessário informar o preço')
    .typeError('O valor informado deve ser um número')
    .positive('O valor informado deve ser positivo'),
  category: yup.string().required('É necessário informar a categoria').trim(),
  type: yup.string().required('É necessário informar o tipo')
})

export const resolver = yupResolver(rules)
