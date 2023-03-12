import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import DrawerNavigator from "./drawer/DrawerNavigator";
import "./i18n.config";
import Constants from 'expo-constants';
import theme from "./theme";

export default function App() {
  return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" backgroundColor={theme.primary}/>
        <DrawerNavigator/>
      </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
});
