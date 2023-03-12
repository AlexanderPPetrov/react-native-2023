import { useSelector } from "react-redux";
import themeDark from "../theme-dark";
import themeLight from "../theme-light";

export const useTheme = () => {
    const lightTheme = useSelector(state => state.settings.lightTheme)
    const theme = lightTheme ? themeLight : themeDark
    return {
        theme,
        lightTheme,
    }
}