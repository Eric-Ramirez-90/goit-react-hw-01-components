import { FriendItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import { List, ListItem } from './FriendList.styled';

export function FriendList({ friends }) {
  return (
    <List>
      {friends.map(friend => (
        <ListItem key={friend.id}>
          <FriendItem friend={friend} />
        </ListItem>
      ))}
    </List>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
