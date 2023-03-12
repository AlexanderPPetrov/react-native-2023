import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useTheme} from '../hooks/useTheme';

export default function DrawerContent({screens}) {
  const {theme} = useTheme();

  const navigation = useNavigation();
  const {t} = useTranslation();
  const getItems = () => {
    return screens.map((screen, index) => {
      return (
        <TouchableOpacity
          key={index}
          onPress={() => navigation.navigate(screen.name)}
          style={[
            styles.drawerItem,
            screen.name === navigation?.getCurrentRoute()?.name
              ? {backgroundColor: theme.drawerItemActiveBg}
              : '',
          ]}
        >
          <View style={styles.iconContainer}>{screen.icon}</View>
          <Text style={[styles.drawerItemText, {color: theme.textPrimary}]}>
            {t(screen.name)}
          </Text>
        </TouchableOpacity>
      );
    });
  };
  //<Ionicons name="home-outline" size={24} color="black" />
  // <EvilIcons name="user" size={24} color="black" />
  return (
    <View style={[styles.drawerContent, {backgroundColor: theme.secondary}]}>
      <View
        style={[
          styles.drawerContentHeader,
          {borderBottomColor: theme.borderColor},
        ]}
      ></View>
      <View style={styles.drawerItemContainer}>{getItems()}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  drawerContentHeader: {
    height: 100,
    borderBottomWidth: 1,
  },
  drawerItemContainer: {
    paddingLeft: 12,
    paddingTop: 12,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    marginVertical: 2,
  },
  drawerItemIcon: {
    marginRight: 6,
  },
  drawerItemText: {
    fontSize: 16,
    marginLeft: 5,
  },

  iconContainer: {
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
