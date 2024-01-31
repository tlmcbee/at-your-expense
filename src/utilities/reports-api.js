import sendRequest from './send-request'
const BASE_URL = '/api/reports'

export function getAllReports() {
  return sendRequest(BASE_URL)
}

export function createReport(formData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', formData)
}

export function addToReport(reportId, formData) {
  return sendRequest(`${BASE_URL}/${reportId}/expenses`, 'POST', formData)
}

export function removeReport(reportId) {
  return sendRequest(`${BASE_URL}/${reportId}`, 'DELETE')
}