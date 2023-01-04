import PropTypes from 'prop-types';
import { Wrapper } from './Profile.styled';

export function Profile({
  username,
  tag,
  location,
  avatarUrl,
  userFollowers,
  userviews,
  userLikes,
}) {
  return (
    <Wrapper>
      <div className="description">
        <img src={avatarUrl} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{userFollowers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{userviews}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{userLikes}</span>
        </li>
      </ul>
    </Wrapper>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatarUrl: PropTypes.string.isRequired,
  userFollowers: PropTypes.number.isRequired,
  userviews: PropTypes.number.isRequired,
  userLikes: PropTypes.number.isRequired,
};
