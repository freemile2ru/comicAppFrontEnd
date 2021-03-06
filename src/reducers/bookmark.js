import actionTypes from '../actions';

const initialState = {
}
/**
 * 
 * 
 * @export
 * @param {any} [state=initialState] 
 * @param {any} action 
 * @returns {state}:
 */

export default function bookmarkReducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_BOOKMARK_SUCCESS :
      return Object.assign({}, state, {
         bookmarks: action.payload || []
      });
    case actionTypes.DELETE_BOOKMARK_SUCCESS :
      return Object.assign({}, state, {
        bookmarks: action.payload || []
      });
    case actionTypes.ADD_BOOKMARK_SUCCESS :
      return Object.assign({}, state, {
        bookmarks: action.payload || []
      });
    case actionTypes.BOOKMARK_ERROR :
      return Object.assign({}, state, {
         error : action.payload
      });
    default:
      return state;
  }
}