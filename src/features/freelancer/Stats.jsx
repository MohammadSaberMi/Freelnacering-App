import { HiCollection, HiCurrencyDollar, HiOutlineViewGrid } from 'react-icons/hi';
import { toPersianNumbersWithComma } from './../../utils/toPersianNumbers';
import Stat from '../../ui/Stat';

function Stats({ proposals }) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  //console.log(acceptedProposals);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid lg:grid-cols-3  gap-8">
      <Stat
        color="primary"
        title=" درخواست ها"
        icon={<HiOutlineViewGrid className="w-20 h-20" />}
        value={numOfProposals}
      />
      <Stat
        color="green"
        title="درخواست های تایید شده"
        icon={<HiCurrencyDollar className="w-20 h-20" />}
        value={acceptedProposals.length}
      />
      <Stat
        color="blue"
        title=" کیف پول"
        icon={<HiCollection className="w-20 h-20" />}
        value={toPersianNumbersWithComma(balance)}
      />
    </div>
  );
}

export default Stats;
