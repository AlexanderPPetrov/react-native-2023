import actionTypes from "./action-types";

export function settings(state = {
    notificationsEnabled: true,
    lightTheme: false,
}, action) {
    switch(action.type) {
        case actionTypes.SET_NOTIFICATIONS_ENABLED:
            return {...state, notificationsOn: action.payload};
        case actionTypes.SET_LIGHT_THEME:
            return {...state, lightTheme: action.payload};
        default:
            return state;
    }
}