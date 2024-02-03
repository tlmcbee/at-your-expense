import sendRequest from "./send-request";

export function getAllReports() {
  return sendRequest('/api/admin')
}