import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  userView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 16,
    paddingBottom: 16,
  },
  username: {
    marginTop: 12,
    fontWeight: '900',
  },
  photoWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'stretch',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  photo: {
    width: 180,
    height: 300,
    margin: 4,
    borderRadius: 8,
  },
});

export default styles;
