import React from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {Container, Content, Input, Item} from 'native-base';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';

import UserList from '../../components/UserList';
import {searchRequestAction} from '../../store/ducks/search';

const SearchScreen = ({users, searchRequest, navigation}) => {
  const {list} = users;
  const onChangeTerm = (text) => searchRequest({term: text});

  const onPressUserHandler = (username) => {
    navigation.navigate('Details', {username});
  };

  return (
    <Container>
      <Content>
        <Item rounded>
          <Input
            placeholder="Regular Textbox"
            onChangeText={debounce(onChangeTerm, 500)}
          />
        </Item>
        {!isEmpty(list) && (
          <UserList users={list} onPress={onPressUserHandler} />
        )}
      </Content>
    </Container>
  );
};
const enhance = compose(
  connect(
    (state) => ({
      users: state.search,
    }),
    {
      searchRequest: searchRequestAction,
    },
  ),
);
export default enhance(SearchScreen);
