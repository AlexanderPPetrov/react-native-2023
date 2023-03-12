import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {useRoute, useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {useTheme} from '../hooks/useTheme';

export default function Header() {
  const {t} = useTranslation();
  const {theme} = useTheme();
  const navigation = useNavigation();
  const route = useRoute();
  const notificationsEnabled = useSelector(
    (state) => state.settings.notificationsEnabled,
  );

  const onMenuPress = () => navigation.toggleDrawer();
  return (
    <>
      <View style={styles.header}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onMenuPress}>
            <Ionicons name="menu" size={24} color={theme.textPrimary} />
          </TouchableOpacity>
        </View>
        <View style={styles.center}>
          <Text style={[styles.headerText, {color: theme.textPrimary}]}>
            {t(route.name)}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Ionicons
            style={!notificationsEnabled ? styles.disabledIcon : ''}
            name="notifications"
            size={24}
            color={theme.textPrimary}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
  },
  headerText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
  buttonContainer: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 1,
  },
  disabledIcon: {
    opacity: 0.5,
  },
});
