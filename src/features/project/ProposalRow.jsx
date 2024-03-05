import Table from '../../ui/Table';
import truncateText from '../../utils/truncatText';

function ProposalRow({ proposal, index }) {
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{proposal.user.name}</td>
      <td>{truncateText(proposal.description, 50)}</td>
      <td>{proposal.duration}</td>
      <td>{proposal.price}</td>
      <td>{proposal.status}</td>
      <td>++</td>
    </Table.Row>
  );
}

export default ProposalRow;
