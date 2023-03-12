import actionTypes from './action-types';

export function settings(
  state = {
    notificationsEnabled: true,
    lightTheme: false,
  },
  action,
) {
  switch (action.type) {
    case actionTypes.SET_SETTING:
      return {
        ...state,
        [action.payload.settingKey]: action.payload.value,
      };

    default:
      return state;
  }
}
