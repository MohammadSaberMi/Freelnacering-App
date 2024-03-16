import { useQuery } from '@tanstack/react-query';
import { getProposalsApi } from '../../services/ProposalService';

export default function useProposals() {
  const { data, isLoading } = useQuery({
    queryKey: ['proposals'],
    queryFn: getProposalsApi,
  });
  const { proposals } = data || {};
  return { proposals, isLoading };
}
