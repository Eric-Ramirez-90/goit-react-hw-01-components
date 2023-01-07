import PropTypes from 'prop-types';
import {
  Frame,
  Image,
  ProfName,
  ProfInfo,
  DescContainer,
  StatsInfo,
  StatsItem,
  Label,
  Quantity,
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
        <Image src={avatarUrl} alt={username} />
        <ProfName>{username}</ProfName>
        <ProfInfo>@{tag}</ProfInfo>
        <ProfInfo>{location}</ProfInfo>
      </DescContainer>

      <StatsInfo>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{userFollowers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{userviews}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{userLikes}</Quantity>
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
