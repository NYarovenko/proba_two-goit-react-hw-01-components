import { FriendListItem } from 'components/friendListItem/FriendListItem';
import { FriendListStyle } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListStyle>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </FriendListStyle>
  );
};
