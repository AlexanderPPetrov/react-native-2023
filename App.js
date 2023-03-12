import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import DrawerNavigator from "./drawer/DrawerNavigator";
import "./i18n.config";
import { Provider } from "react-redux";
import configureStore from "./redux/configureStore";
const store = configureStore();

import Constants from 'expo-constants';
import theme from "./theme-dark";

export default function App() {
  return (
      <Provider store={store}>
          <SafeAreaView style={styles.container}>
              <StatusBar style="light" backgroundColor={theme.primary}/>
              <DrawerNavigator/>
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
