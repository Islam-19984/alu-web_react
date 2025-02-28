import { Map } from "immutable";
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, LOGIN_SUCCESS, LOGIN_FAILURE, HIDE_NOTIFICATION_DRAWER } from '../Actions/uiActionTypes'


export const initialState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
})

export function uiReducer(state = initialState, action) {
  switch(action.type){
    case DISPLAY_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", true)
    case HIDE_NOTIFICATION_DRAWER:
      return state.set("isNotificationDrawerVisible", false)
    case LOGIN:
      return state.set("user", action.user)
    case LOGIN_SUCCESS:
      return state.set("isUserLoggedIn", true)
    case LOGIN_FAILURE:
      return state.set("isUserLoggedIn", false)
    case LOGOUT: {
      return state.withMutations((state)=>state.set("isUserLoggedIn", false).set("user", null))
    }
    default:
      return state
  }
}