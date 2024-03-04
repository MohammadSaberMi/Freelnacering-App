import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import { editProjectApi } from '../../services/ProjectServices';

export default function useEditeProject() {
  const queryClient = useQueryClient();

  const { isPending: isEditing, mutate: editProject } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (data) => {
      //console.log(data);
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ['owner-projects'],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { isEditing, editProject };
}
