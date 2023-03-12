import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DrawerContent from './DrawerContent'
import theme from "../theme";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const screens = [
        {
            name: 'Home',
            component: HomeScreen,
            title: 'Начало',
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
            title: 'Профил',
            component: ProfileScreen,
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