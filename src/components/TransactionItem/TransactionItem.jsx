import PropTypes from 'prop-types';

export function TransactionItem({ item: { type, amount, currency } }) {
    return <tr>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
    </tr>
}

TransactionItem.propTypes = {
    item: PropTypes.exact({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
    })

}