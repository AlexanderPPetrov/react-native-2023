import actionTypes from "./action-types";

export function setSetting(payload) {
    return {
        type: actionTypes.SET_SETTING,
        payload,
    }
}


// export function setNotificationsEnabled(value) {
//     return {
//         type: actionTypes.SET_NOTIFICATIONS_ENABLED,
//         payload: value,
//     }
// }
// export function setLightTheme(value) {
//     return {
//         type: actionTypes.SET_LIGHT_THEME,
//         payload: value,
//     }
// }