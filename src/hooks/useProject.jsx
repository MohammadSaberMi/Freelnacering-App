import { useQuery } from '@tanstack/react-query';
import { getProjectsApi } from './../services/ProjectServices';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

export default function useProjects() {
  const { search } = useLocation();
  const quaryObject = queryString.parse(search);
  const { data, isLoading } = useQuery({
    queryKey: ['projects', quaryObject],
    queryFn: () => getProjectsApi(search),
  });
  const { projects } = data || {};
  return { projects, isLoading };
}
