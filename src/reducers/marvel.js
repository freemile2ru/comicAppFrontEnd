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

export default function marvelReducer(state=initialState, action) {
  switch (action.type) {
    case actionTypes.FETCH_COMICS_SUCCESS :
      return Object.assign({}, state, {
         comics : action.payload
      });
    case actionTypes.COMICS_ERROR :
      return Object.assign({}, state, {
         error : action.payload
      });
    default:
      return state;
  }
}