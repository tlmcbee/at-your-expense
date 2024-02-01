import sendRequest from './send-request'
const BASE_URL = '/api/expenses'


export function getExpense(expenseId){
  return sendRequest(`${BASE_URL}/${expenseId}`)
}

export function removeExpense(expenseId) {
  return sendRequest(`${BASE_URL}/${expenseId}`, 'DELETE')
}

export function editExpense(expenseId, formData) {
  return sendRequest(`${BASE_URL}/${expenseId}`, 'PUT', formData)
}