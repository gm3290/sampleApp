import React from 'react';
import {connect} from 'react-redux';
import {View, Image} from 'react-native';
import {Container, Content} from 'native-base';
import styles from './styles';

const ImagePreview = ({navigation, photos}) => {
  const photoIndex = navigation.getParam('photoIndex', null);
  const photo = photos[photoIndex];
  if (!photos[photoIndex]) {
    return <View />;
  }

  return (
    <Container>
      <Content>
        <Image style={styles.image} source={{uri: photo.urls.full}} />
      </Content>
    </Container>
  );
};

export default connect(
  (state) => ({
    photos: state.search.photos,
  }),
  null,
)(ImagePreview);
