import { StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import theme from "../theme-dark";

export default function GradientBackground() {
    return (
        <LinearGradient
            colors={[theme.primary, theme.primaryDark]}
            style={styles.background}
        />
    );
}

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    },
});