import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createProjectApi } from '../../services/ProjectServices';
import { toast } from 'react-hot-toast';

export default function useCreateProject() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createProject } = useMutation({
    mutationFn: createProjectApi,
    onSuccess: (data) => {
      //console.log(data);
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ['owner-projects'],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isCreating, createProject };
}
