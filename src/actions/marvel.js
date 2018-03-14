import actionTypes from './';
import api from '../utils/api';
import loader from './loader';


export const getComics = (page) => {
  return async (dispatch) => {
    loader.isLoading(dispatch)
    const response = await api.get(`/comics?page=${page}`);
    //loader.isNotLoading(dispatch);
    if(response.data.success){
      return  dispatch({
          type: actionTypes.FETCH_COMICS_SUCCESS,
          payload: response.data.comics,
        });
     }
      return dispatch({
        type: actionTypes.COMICS_ERROR,
        payload: response.data.message
      });
  };
};
  
  