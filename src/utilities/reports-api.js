import sendRequest from './send-request'
const BASE_URL = '/api/reports'

export function getAllReports() {
  return sendRequest(BASE_URL)
}

export function createReport(formData) {
  return sendRequest(`${BASE_URL}/new`, 'POST', formData)
}

export function addToReport(reportId, formData) {
  return sendRequest(`${BASE_URL}/${reportId}/expenses`, 'POST', formData, true)
}

export function removeReport(reportId) {
  return sendRequest(`${BASE_URL}/${reportId}`, 'DELETE')
}

export function submitReport(reportId) {
  return sendRequest(`${BASE_URL}/${reportId}/submit-report`, 'POST')
}

export function editReport(reportId) {
  return sendRequest(`${BASE_URL}/${reportId}/edit-report`, 'POST')
}