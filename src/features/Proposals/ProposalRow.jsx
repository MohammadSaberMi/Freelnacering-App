import Table from '../../ui/Table';
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from '../../utils/toPersianNumbers';
import truncateText from '../../utils/truncatText';

const statusStyle = [
  {
    label: 'رد شده',
    className: 'badge--danger',
  },
  {
    label: 'در انتظار تایید',
    className: 'badge--secondary',
  },
  {
    label: 'تایید شده',
    className: 'badge--success',
  },
];
function ProposalRow({ proposal, index }) {
  const { status, description, duration, price } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(description, 50)}</td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumbersWithComma(price)}</td>
      <td>
        <span className={`badge ${statusStyle[status].className}`}>
          {statusStyle[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default ProposalRow;
