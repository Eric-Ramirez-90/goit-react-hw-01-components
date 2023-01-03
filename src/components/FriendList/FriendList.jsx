import { FriendItem } from "components/FriendListItem/FriendListItem";
import PropTypes from 'prop-types';

export function FriendList({ friends }) {
    return <ul>
        {friends.map(friend => <FriendItem key={friend.id} friend={friend} />)}
    </ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    ).isRequired,
};