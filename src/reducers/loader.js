import actionTypes from '../actions';

/**
 * 
 * 
 * @export
 * @param {any} [state=initialState] 
 * @param {any} action 
 * @returns {state}:
 */
export default function loadingReducer(state = { isLoading: true }, action) {
  switch (action.type) {
    case actionTypes.LOADING:
      return Object.assign({}, state, {
         isLoading: action.payload
        });
    case actionTypes.NOT_LOADING:
    return Object.assign({}, state, {
         isLoading: action.payload
        });
    default:
      return state;
  }
}