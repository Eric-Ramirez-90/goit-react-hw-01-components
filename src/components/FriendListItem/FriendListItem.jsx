import PropTypes from 'prop-types';

export function FriendItem({ friend: { avatar, name, isOnline } }) {
    return <li className="item">
  <span className="status"></span>
  <img className="avatar" src={avatar} alt={name} width="48" />
            <p className="name">{name}</p>
</li>
}

FriendItem.propTypes = {
    friend: PropTypes.exact({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired
    }).isRequired,
}