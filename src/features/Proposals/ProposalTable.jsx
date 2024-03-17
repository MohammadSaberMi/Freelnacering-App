import Loading from '../../ui/Loading';
import Table from '../../ui/Table';
import Empty from './../../ui/Empty';
import ProposalRow from './ProposalRow';
import useProposals from './useProposals';

function ProposalsTable() {
  const { isLoading, proposals } = useProposals();
  if (isLoading) return <Loading />;
  if (!proposals.length) return <Empty resourceName=" پروپوزال" />;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>توضیحات</th>
        <th>زمان تحویل</th>
        <th>هزینه </th>
        <th>وضعیت </th>
      </Table.Header>
      <Table.Body>
        {proposals.map((proposal, index) => (
          <ProposalRow key={proposal._id} index={index} proposal={proposal} />
        ))}
      </Table.Body>
    </Table>
  );
}

export default ProposalsTable;
