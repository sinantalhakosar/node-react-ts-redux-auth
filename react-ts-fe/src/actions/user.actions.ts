import { USERCONSTANTS } from '../constants/user.constants';
import { login as userServiceLogin, logout as userServiceLogout } from '../services/user.services';
import { error as alertError } from './alert.actions';
import { history } from '../helpers/history';
import { UserProps, ClientProps } from '../types/user.types';

export const login = (userData: UserProps) => {
    function request(username: Pick<UserProps, 'username'>) { return { type: USERCONSTANTS.LOGIN_REQUEST, username } }
    function success(clientProps: ClientProps) { return { type: USERCONSTANTS.LOGIN_SUCCESS, clientProps } }
    function failure(error: string) { return { type: USERCONSTANTS.LOGIN_FAILURE, error } }

    return (dispatch:any) => {
        dispatch(request({username: userData.username}));

        userServiceLogin(userData).then(user => { 
                dispatch(success(user));
                history.push('/');
            },
            error => {
                dispatch(failure(error.toString()));
                dispatch(alertError(error.toString()));
            }
        );
    };
}

export const logout = () => {
    userServiceLogout();
    return { type: USERCONSTANTS.LOGOUT };
}