import PropTypes from 'prop-types';

export function Statistics({stats}) {
    return   <ul className="stat-list">
        {stats.map(({id, label, percentage}) => <li key={id} className="item">
      <span className="label">{label}</span>
      <span className="percentage">{percentage}</span>
    </li>)}
  </ul>

}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ),
};