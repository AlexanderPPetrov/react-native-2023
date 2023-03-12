import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/ProfileScreen";
import DrawerContent from './DrawerContent'

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    const screens = [
        {
            name: 'Home',
            component: HomeScreen,
            title: 'Начало',
            icon: 'home-outline',
        },
        {
            name: 'Profile',
            icon: 'user',
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