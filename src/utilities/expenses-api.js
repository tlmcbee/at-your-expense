import sendRequest from './send-request'


export function getExpense(expenseId){
  return sendRequest(`/api/expenses/${expenseId}`)
}

export function removeExpense(expenseId) {
  return sendRequest(`/api/expenses/${expenseId}`, 'DELETE')

}