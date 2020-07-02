import React from 'react';
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
  const photo = photos[photoIndex];
  if (!photos[photoIndex]) {
    return <View />;
  }

  const onSwipeLeftHandler = () => {
    console.log('left===>', photoIndex);
  };

  const onSwipeRightHandler = () => {
    console.log('right===>', photoIndex);
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
