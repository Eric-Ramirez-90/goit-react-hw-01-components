import { Section } from '../Section/Section';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import { user, transactions, friends, data } from '../../data/index';

export default function App() {
  return (
    <>
      <Section title="Profile Card">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatarUrl={user.avatar}
          userFollowers={user.stats.followers}
          userviews={user.stats.views}
          userLikes={user.stats.likes}
        />
      </Section>

      <Statistics title="Upload stats" stats={data} />

      <Section title="Friends List">
        <FriendList friends={friends} />
      </Section>

      <Section>
        <TransactionHistory items={transactions} />
      </Section>
    </>
  );
}
