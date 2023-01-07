import PropTypes from 'prop-types';
import { Status, Image, Name } from './FriendListItem.styled';

export function FriendItem({ friend: { avatar, name, isOnline } }) {
  return (
    <>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </>
  );
}

FriendItem.propTypes = {
  friend: PropTypes.exact({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
