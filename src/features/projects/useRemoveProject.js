import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeProjectApi } from '../../services/ProjectServices';
import { toast } from 'react-hot-toast';

export default function useRemoveProject() {
  const queryClient = useQueryClient();
  const {
    mutate: removeProject,
    isPending: isDeleting,
    data,
  } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: ({ message, data }) => {
      //console.log(data);
      toast.success(message);

      queryClient.invalidateQueries({
        queryKey: ['owner-projects'],
      });
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });

  return { removeProject, isDeleting, data };
}
