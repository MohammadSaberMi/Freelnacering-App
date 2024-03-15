import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';
import Stat from './Stat';

function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((p) => p.status === 2).length;
  const initialValue = 0;
  const numOfProposal = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    initialValue,
  );
  return (
    <div className="grid lg:grid-cols-3  gap-8">
      <Stat
        color="primary"
        title="پروژه ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={numOfProjects}
      />
      <Stat
        color="green"
        title="پروزه های واگذار شده "
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={numOfAcceptedProjects}
      />
      <Stat
        color="blue"
        title="درخواست ها"
        icon={<HiCollection className="w-20 h-20" />}
        value={numOfProposal}
      />
    </div>
  );
}

export default Stats;
