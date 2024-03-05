import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { toggleProjectApi } from '../../services/ProjectServices';

export default function useToggleProjectStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: toggleProjectStatus } = useMutation({
    mutationFn: toggleProjectApi,
    onSuccess: (data) => {
      //console.log(data);
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ['owner-projects'],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isUpdating, toggleProjectStatus };
}
