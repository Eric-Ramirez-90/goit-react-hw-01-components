import Profile from '../Profile/Profile';
import user from '../user.json';

export default function App() {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatarUrl ={user.avatar}
      userFollowers={user.stats.followers}
      userviews={user.stats.views}
      userLikes={user.stats.likes}
        />
    </div>
  );
};
