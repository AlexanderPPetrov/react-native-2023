import DefaultLayout from "../layouts/DefaultLayout";
import SettingItem from "../components/SettingItem";
export default function SettingsScreen({navigation}) {
    return (
        <DefaultLayout>
            <SettingItem settingKey="lightTheme"/>
            <SettingItem settingKey="notificationsEnabled"/>
        </DefaultLayout>
    );
}