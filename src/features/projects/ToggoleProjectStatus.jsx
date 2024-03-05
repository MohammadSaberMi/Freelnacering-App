import useToggleProjectStatus from './useToggleProjectStatus';
import Loading from './../../ui/Loading';
import Toggle from '../../ui/toggle';

function ToggoleProjectStatus({ project }) {
  const { status } = project;
  //const [enabled, setEnabled] = useState(project.status === 'OPEN' ? 'باز' : 'بسته');
  const enabled = status === 'OPEN' ? true : false;
  const { isUpdating, toggleProjectStatus } = useToggleProjectStatus();

  const toggleHandler = () => {
    const newStatus = status === 'OPEN' ? 'CLOSED' : 'OPEN';
    toggleProjectStatus({
      id: project._id,
      data: { status: newStatus },
    });
  };
  return (
    <div className="w-[5rem]">
      {isUpdating ? (
        <Loading height={20} width={50} />
      ) : (
        <Toggle
          label={status === 'OPEN' ? 'باز' : 'بسته'}
          enabled={enabled}
          onChange={toggleHandler}
        />
      )}
    </div>
  );
}

export default ToggoleProjectStatus;
