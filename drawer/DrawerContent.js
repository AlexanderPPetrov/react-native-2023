import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Ionicons} from '@expo/vector-icons'
import {useNavigation} from "@react-navigation/native";
import GradientBackground from "../components/GradientBackground";
import theme from "../theme";
export default function DrawerContent({screens}) {

    const navigation = useNavigation()



    const getItems = () => {
        return screens.map((screen, index) => {
            return <TouchableOpacity key={index}
                                     onPress={() => navigation.navigate(screen.name)}
                                     style={styles.drawerItem}>
                <Ionicons style={styles.drawerItemIcon}
                          name="home-outline"
                          size={24}
                          color={theme.textPrimary}/>
                <Text style={styles.drawerItemText}>
                    {screen.title}
                </Text>
            </TouchableOpacity>
        })
    }
    //<Ionicons name="home-outline" size={24} color="black" />
    // <EvilIcons name="user" size={24} color="black" />
    return <View style={styles.drawerContent}>
        {getItems()}
    </View>
}

const styles = StyleSheet.create({
    drawerContent: {
        padding: 6,
        flex: 1,
        backgroundColor: theme.secondary
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 6,
    },
    drawerItemIcon: {
        marginRight: 6,
    },
    drawerItemText: {
        color: theme.textPrimary,
        fontSize: 16,
    },
});