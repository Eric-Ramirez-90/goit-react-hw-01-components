import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import PropTypes from 'prop-types';
import { Table, TableHead, TableTitle } from './TransactionHistory.styled';

export function TransactionHistory({ items }) {
  return (
    <Table>
      <TableHead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </TableHead>

      <tbody>
        {items.map(item => (
          <TransactionItem key={item.id} item={item} />
        ))}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
