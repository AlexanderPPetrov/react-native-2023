import React from 'react';
import {
    ScrollView,
    StyleSheet
} from 'react-native';

import {LinearGradient} from 'expo-linear-gradient';
import theme from "../theme";


export default function Container({children, containerStyle}) {
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