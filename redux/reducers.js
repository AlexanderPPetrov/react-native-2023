import actionTypes from './settings/action-types';
import { combineReducers } from "redux";

export function settings(state = {
    notificationsOn: true,
}, action) {
    switch(action.type) {
        case actionTypes.SET_NOTIFICATIONS_ON:
            return {...state, notificationsOn: action.payload};
        default:
            return state;
    }
}


export default combineReducers({
    settings,
})