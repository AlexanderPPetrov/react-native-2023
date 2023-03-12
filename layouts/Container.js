import React from 'react';
import {
    ScrollView,
    StyleSheet
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import { useTheme } from "../hooks/useTheme";

export default function Container({children, containerStyle}) {
    const { theme } = useTheme()
    return <ScrollView contentContainerStyle={[styles.container, containerStyle]}>
        <LinearGradient style={styles.gradient}
                        colors={[theme.primary, theme.primaryDark]}/>
        { children }
    </ScrollView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});