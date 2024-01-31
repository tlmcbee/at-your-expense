import sendRequest from './send-request'


export function getExpense(expenseId){
  return sendRequest(`/api/expenses/${expenseId}`)
}