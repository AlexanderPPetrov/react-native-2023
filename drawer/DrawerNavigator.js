import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, EvilIcons, FontAwesome } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import DrawerContent from './DrawerContent'
import {useTheme} from "../hooks/useTheme";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const { theme } = useTheme()

    const screens = [
        {
            name: 'Home',
            component: HomeScreen,
            icon: <Ionicons name="home-outline"
                            size={20}
                            color={theme.textPrimary}/>,
        },
        {
            name: 'Profile',
            icon: <EvilIcons name="user"
                             size={26}
                             style={{paddingBottom: 3}}
                             color={theme.textPrimary}/>,
            component: ProfileScreen,
        },
        {
            name: 'Settings',
            icon: <FontAwesome name="cogs"
                             size={20}
                             color={theme.textPrimary}/>,
            component: SettingsScreen,
        },
    ]

    const getScreens = () => {
        return screens.map(({ name, component}) => {
            return <Drawer.Screen key={name}
                                  name={name}
                                  component={component} />
        })
    }

    return (
        <NavigationContainer>
            <Drawer.Navigator useLegacyImplementation
                              initialRouteName="Home"
                              screenOptions={{headerShown: false}}
                              drawerContent={(props) => <DrawerContent screens={screens}/>}
            >
                {getScreens()}
            </Drawer.Navigator>
        </NavigationContainer>
    );
}