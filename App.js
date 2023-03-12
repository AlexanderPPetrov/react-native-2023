import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import DrawerNavigator from './drawer/DrawerNavigator';
import AppStatusBar from './components/AppStatusBar';
import './i18n.config';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
const store = configureStore();

import Constants from 'expo-constants';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppStatusBar />
        <DrawerNavigator />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
