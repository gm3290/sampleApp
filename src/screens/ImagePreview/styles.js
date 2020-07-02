import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Header} from 'react-navigation-stack';

const headerHeight = Header.HEIGHT;

const screenWidth = Math.round(Dimensions.get('window').width);
const screenHeight = Math.round(Dimensions.get('window').height);

const styles = StyleSheet.create({
  image: {
    width: screenWidth,
    height: screenHeight - headerHeight,
  },
});

export default styles;
