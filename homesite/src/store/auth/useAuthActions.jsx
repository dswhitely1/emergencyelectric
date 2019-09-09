import {useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {axiosLogin} from '../../api';
import axios from 'axios';

export const useAuthActions = () => {
  const dispatch = useDispatch();

  const login = useCallback(({ username, password }) => {
    axiosLogin()
        .post('/login',
            `grant_type=password&username=${username}&password=${password}`)
        .then(res => console.log(res.data))
        .catch(err => console.log(err.response));
  }, [dispatch]);

  const register = useCallback(newUser => {
    axios.post('/register', newUser)
         .then(res => console.log(res.data))
         .catch(err => console.log(err.response));
  }, [dispatch]);
};