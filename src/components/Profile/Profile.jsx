import PropTypes from 'prop-types';
import {
  Frame,
  Image,
  ProfName,
  ProfInfo,
  DescContainer,
  StatsInfo,
  StatsItem,
} from './Profile.styled';

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
    <Frame>
      <DescContainer>
        <Image src={avatarUrl} alt="User avatar" className="avatar" />
        <ProfName>{username}</ProfName>
        <ProfInfo>{tag}</ProfInfo>
        <ProfInfo>{location}</ProfInfo>
      </DescContainer>

      <StatsInfo>
        <StatsItem>
          <span className="label">Followers</span>
          <span className="quantity">{userFollowers}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Views</span>
          <span className="quantity">{userviews}</span>
        </StatsItem>
        <StatsItem>
          <span className="label">Likes</span>
          <span className="quantity">{userLikes}</span>
        </StatsItem>
      </StatsInfo>
    </Frame>
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
