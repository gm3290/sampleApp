import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Image} from 'react-native';
import {Container, Content} from 'native-base';
import GestureRecognizer from 'react-native-swipe-gestures';
import styles from './styles';

const config = {
  velocityThreshold: 0.3,
  directionalOffsetThreshold: 80,
};

const ImagePreview = ({navigation, photos}) => {
  const photoIndex = navigation.getParam('photoIndex', null);
  const [localIndex, setIndex] = useState(photoIndex);
  const photo = photos[localIndex];
  if (!photo) {
    return <View />;
  }

  const onSwipeLeftHandler = () => {
    let newIndex = localIndex + 1;
    if (newIndex > photos.length) {
      newIndex = 0;
    }
    setIndex(newIndex);
  };

  const onSwipeRightHandler = () => {
    let newIndex = localIndex - 1;
    if (newIndex < 0) {
      newIndex = photos.length;
    }
    setIndex(newIndex);
  };

  return (
    <Container>
      <Content>
        <GestureRecognizer
          onSwipeLeft={onSwipeLeftHandler}
          onSwipeRight={onSwipeRightHandler}
          config={config}>
          <Image style={styles.image} source={{uri: photo.urls.full}} />
        </GestureRecognizer>
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
