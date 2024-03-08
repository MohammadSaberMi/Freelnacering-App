import http from './httpService';

//export function changeProposalStatusApi({ id, data }) {
//  // {status, projectId}
//  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
//}
export function changeProposalStatusApi({ proposalId, ...rest }) {
  // {status, projectId}
  return http.patch(`/proposal/${proposalId}`, rest).then(({ data }) => data.data);
}
