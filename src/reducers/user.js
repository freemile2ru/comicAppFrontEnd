import actionTypes from '../actions';


const initialState = {}
/**
 * 
 * 
 * @export
 * @param {any} [state=initialState] 
 * @param {any} action 
 * @returns {state}:
 */

export default function userReducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESSFUL :
      return Object.assign({}, state, {
        user : action.payload
      });
    case actionTypes.SIGN_UP_SUCCESSFUL :
      return Object.assign({}, state, {
        user: action.payload
      });
    case actionTypes.EDIT_USER_SUCCESS :
      return Object.assign({}, state, {
        user: action.payload
      });
    case actionTypes.USER_ERROR :
      return Object.assign({}, state, {
        error: action.payload
      });
    case actionTypes.RESET_USER_ERROR:
      return Object.assign({}, state, {
        error: null
      });
    default:
      return state;
  }
}