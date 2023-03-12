import {View, Switch, StyleSheet, Text } from "react-native";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import theme from "../theme";
import {setSetting} from "../redux/settings/actions";
export default function SettingItem({settingKey}) {

    const { t } = useTranslation()
    const settings = useSelector(state => state.settings)
    const dispatch = useDispatch()
    const isEnabled = settings[settingKey]
    const toggleSwitch = () => {
        dispatch(setSetting({
            settingKey,
            value: !isEnabled,
        }))
    };
    return <View style={styles.container}>
        <Text style={styles.settingLabel}>
            {t(settingKey)}
        </Text>
        <Switch
            trackColor={{false: '#767577', true: '#81b0ff'}}
            thumbColor={isEnabled ? '#31ff2b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    </View>
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    settingLabel: {
        color: theme.textPrimary
    }
});
