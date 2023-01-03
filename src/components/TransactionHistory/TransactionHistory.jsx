import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import PropTypes from 'prop-types';

export function TransactionHistory({items}) {
    return <table className="transaction-history">
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map(item => <TransactionItem key={item.id} item={item} />)}
  </tbody>
</table>
}

TransactionHistory.propTypes = { 
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        })
    ).isRequired,
    
}