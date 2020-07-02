import React, {useEffect} from 'react';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {View, Image, TouchableOpacity} from 'react-native';
import {Container, Content, Thumbnail, H2} from 'native-base';
import isEmpty from 'lodash/isEmpty';
import {getUserPhotoAction} from '../../store/ducks/search';
import styles from './styles';

const DetailsScreen = ({navigation, getPhotos, users, photos}) => {
  const username = navigation.getParam('username', null);
  useEffect(() => {
    if (username) {
      getPhotos({username});
    }
  }, [username, getPhotos]);
  const user = users.find((u) => u.username === username);

  if (!user) {
    return (
      <View>
        <H2 style={styles.username}>Invalid user</H2>
      </View>
    );
  }

  const onPressPhotoHandler = (photoIndex) => () => {
    navigation.navigate('Preview', {photoIndex});
  };

  return (
    <Container>
      <Content>
        <View style={styles.userView}>
          <Thumbnail round large source={{uri: user.profile_image.medium}} />
          <H2 style={styles.username}>{user.name}</H2>
        </View>
        <View style={styles.photoWrapper}>
          {!isEmpty(photos) &&
            photos.map((photo, i) => (
              <TouchableOpacity key={photo.id} onPress={onPressPhotoHandler(i)}>
                <Image style={styles.photo} source={{uri: photo.urls.thumb}} />
              </TouchableOpacity>
            ))}
        </View>
      </Content>
    </Container>
  );
};

const enhance = compose(
  connect(
    (state) => ({
      users: state.search.list,
      photos: state.search.photos,
    }),
    {
      getPhotos: getUserPhotoAction,
    },
  ),
);
export default enhance(DetailsScreen);
