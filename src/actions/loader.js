import actionTypes from './';

export default {
  isLoading: (dispatch) => {
      return  dispatch({
        type: actionTypes.LOADING,
        payload: true,
      });
  },
  isNotLoading: (dispatch) => {
      return  dispatch({
        type: actionTypes.NOT_LOADING,
        payload: false,
      });
  }
}