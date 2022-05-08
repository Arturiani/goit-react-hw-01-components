import user from './SocialNetworkProfile/user.json'
import { Profile } from './SocialNetworkProfile/SocialNetworkProfile'
import stat from './StatisticsSection/data.json'
import { Statistics } from './StatisticsSection/Statistics'
import friendsInfo from './ListOfFriends/friends.json'
import { FriendList } from './ListOfFriends/ListOfFriends'
import transactions from './TransactionHistory/transactions.json'
import { TransactionHistory } from './TransactionHistory/TransactionHistory'



export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        data={stat}
      />
      <FriendList
        friends={friendsInfo}
      />
      <TransactionHistory
        transactions={transactions}
      />
    </div>
  )
}
