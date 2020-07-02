import React from 'react';
import {
  List,
  ListItem,
  Left,
  Body,
  Thumbnail,
  Text,
  Right,
  Button,
} from 'native-base';

const UserList = ({users, onPress}) => {
  const onPressHandler = (username) => () => {
    onPress(username);
  };

  return (
    <List>
      {users.map((user) => (
        <ListItem avatar key={user.id}>
          <Left>
            <Thumbnail small source={{uri: user.profile_image.small}} />
          </Left>
          <Body>
            <Text>{user.name}</Text>
            <Text note numberOfLines={1}>
              {user.bio || 'Empty Bio!!!'}
            </Text>
          </Body>
          <Right>
            <Button small transparent onPress={onPressHandler(user.username)}>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
