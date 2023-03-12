import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {useNavigation} from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import theme from "../theme-dark";
export default function DrawerContent({screens}) {

    const navigation = useNavigation()
    const { t } = useTranslation()
    const getItems = () => {
        return screens.map((screen, index) => {
            return <TouchableOpacity key={index}
                                     onPress={() => navigation.navigate(screen.name)}
                                     style={[
                                         styles.drawerItem,
                                         screen.name === navigation?.getCurrentRoute()?.name ?
                                             styles.drawerItemActive : ''
                                     ]}>
                <View style={styles.iconContainer}>
                    {screen.icon}
                </View>
                <Text style={styles.drawerItemText}>
                    {t(screen.name)}
                </Text>
            </TouchableOpacity>
        })
    }
    //<Ionicons name="home-outline" size={24} color="black" />
    // <EvilIcons name="user" size={24} color="black" />
    return <View style={styles.drawerContent}>
        <View style={styles.drawerContentHeader}></View>
        <View style={styles.drawerItemContainer}>
            {getItems()}
        </View>
    </View>
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: theme.secondary
    },
    drawerContentHeader: {
        height: 100,
        borderBottomWidth: 1,
        borderBottomColor: theme.borderColor,
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
    drawerItemActive: {
        backgroundColor: theme.drawerItemActiveBg,
    },
    drawerItemIcon: {
        marginRight: 6,
    },
    drawerItemText: {
        color: theme.textPrimary,
        fontSize: 16,
        marginLeft: 5,
    },
    iconContainer: {
        width: 30,
        alignItems: 'center',
        justifyContent: 'center',
    }
});