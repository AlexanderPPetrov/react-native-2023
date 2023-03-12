import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute, useNavigation } from "@react-navigation/native";
import { useTranslation } from 'react-i18next';
import { useSelector } from "react-redux";
import theme from "../theme-dark";
export default function Header() {
    const { t } = useTranslation();
    const navigation = useNavigation();
    const route = useRoute();

    const notificationsEnabled = useSelector(state => state.settings.notificationsEnabled)

    const onMenuPress = () => navigation.toggleDrawer();
    return (
        <>
            <View style={styles.header}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onMenuPress}>
                        <Ionicons name="menu" size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={styles.center}>
                    <Text style={styles.headerText}>
                        {t(route.name)}
                    </Text>
                </View>
                <View style={styles.buttonContainer}>
                    <Ionicons style={
                        !notificationsEnabled ?
                        styles.disabledIcon : ''}
                              name="notifications"
                              size={24} color="white" />
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
        color: '#ffffff',
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
        opacity: 0.5
    },
});
