import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AppState } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './reducers'
import ShowMain from './containers/ShowMain'
//import PushController from './PushController'

const store = createStore(rootReducer);

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  constructor(props) {
    super(props);

    this.state = {
    };

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(appState) {
    if(appState === 'background') {

    }
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <ShowMain />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/bg.png')
      ])
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#033e6b',
  },
});
