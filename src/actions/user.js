import jwtDecode from 'jwt-decode';
import actionTypes from './';
import api from '../utils/api';
import loader from './loader';


export const loginAction = (credentials) => {
  return async (dispatch) => {
    loader.isLoading(dispatch)
    const response = await api.post('/users/login', credentials);
    //loader.isNotLoading(dispatch)
    if(response.data.token){
      const { token } = response.data
      const user = jwtDecode(token);
      window.localStorage.setItem('token', token);
      return  dispatch({
          type: actionTypes.LOGIN_SUCCESSFUL,
          payload: user,
        });
     }
      return dispatch({
        type: actionTypes.USER_ERROR,
        payload: response.data.message
      });
  };
};

export const signUpAction = (credentials) => {
  return async (dispatch) => {
      loader.isLoading(dispatch)
      const response = await api.post('/users/signup', credentials);
      //loader.isNotLoading(dispatch)
      if(response.data.token){
        const { token } = response.data
        const user = jwtDecode(token);
        window.localStorage.setItem('token', token);
        return  dispatch({
            type: actionTypes.LOGIN_SUCCESSFUL,
            payload: user,
          });

        } 
        return dispatch({
          type: actionTypes.USER_ERROR,
          payload: response.data.message
        });
    };
  };

export const resetUserError = ()=>{
  return (dispatch)=> {
    return dispatch({
      type: actionTypes.RESET_USER_ERROR,
    })
  }
} 
  
  