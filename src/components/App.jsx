import Profile from './components/Profile/Profile.js'
import user from './user.json';

export default function App() {
  return (
    <div>
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    </div>
  );
};
