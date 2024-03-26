import {
  AvatarStyle,
  ItemStyle,
  NameStyle,
  StatusStyle,
} from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <ItemStyle>
      <StatusStyle isOnline={isOnline}></StatusStyle>
      <AvatarStyle src={avatar} alt={name} width="32" />
      <NameStyle>{name}</NameStyle>
    </ItemStyle>
  );
};
