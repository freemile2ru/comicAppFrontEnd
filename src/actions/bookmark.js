import jwtDecode from 'jwt-decode';
import toastr from 'toastr';
import actionTypes from './';
import api from '../utils/api';
import loader from './loader';


export const getBookmarks = () => {
  return async (dispatch) => {
    const token  = window.localStorage.getItem('token');
    const user = jwtDecode(token);
    loader.isLoading(dispatch)
    const response = await api.get(`/bookmarks?userId=${user.userId}`);
    //loader.isNotLoading(dispatch);
    if(response.data.success){
      return  dispatch({
          type: actionTypes.FETCH_BOOKMARK_SUCCESS,
          payload: response.data.bookmarks,
        });
     }
      return dispatch({
        type: actionTypes.BOOKMARK_ERROR,
        payload: response.data.message
      });
  };
};

export const addBookmark = (comic) => {
    return async (dispatch) => {
      const token  = window.localStorage.getItem('token');
      const user = jwtDecode(token);
      loader.isLoading(dispatch)
      const response = await api.post(`/bookmarks`, {comic, userId: user.userId});
      //loader.isNotLoading(dispatch);
      if(response.data.success){
        toastr.success("Movie has been added to your Bookmark")
        return  dispatch({
            type: actionTypes.ADD_BOOKMARK_SUCCESS,
            payload: response.data.bookmarks,
          });
       }
        return dispatch({
          type: actionTypes.BOOKMARK_ERROR,
          payload: response.data.message
        });
    };
  };
  
  export const deleteBookmark = (id) => {
    return async (dispatch) => {
      loader.isLoading(dispatch)
      const response = await api.delete(`/bookmarks/${id}`);
      //loader.isNotLoading(dispatch);
      if(response.data.success){
        toastr.success("Movie has been deleted from your Bookmarks")
        return  dispatch({
            type: actionTypes.DELETE_BOOKMARK_SUCCESS,
            payload: response.data.bookmarks,
          });
       }
        return dispatch({
          type: actionTypes.BOOKMARK_ERROR,
          payload: response.data.message
        });
    };
  };
  