import ProposalsTable from '../features/project/ProposalsTable';
import useProject from '../features/project/useProject';
import ProjectHeader from '../features/project/ProjectHeader';
import Loading from '../ui/Loading';

function Project() {
  const { isLoading, project } = useProject();
  console.log(project);
  if (isLoading) return <Loading />;
  return (
    <div>
      <ProjectHeader project={project} />
      <ProposalsTable proposals={project.proposals} />
    </div>
  );
}

export default Project;
