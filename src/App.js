import React from 'react';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Root} from 'native-base';

import SearchScreen from './screens/SearchScreen';
import DetailsScreen from './screens/DetailsScreen';
import ImagePreview from './screens/ImagePreview';
import configureStore from './store/configureStore';

const store = configureStore({});

const AppNavigator = createStackNavigator(
  {
    Home: SearchScreen,
    Details: DetailsScreen,
    Preview: {
      screen: ImagePreview,
      navigationOptions: {
        gestureEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);
// export default createAppContainer(AppNavigator);

export default () => (
  <Root>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </Root>
);
