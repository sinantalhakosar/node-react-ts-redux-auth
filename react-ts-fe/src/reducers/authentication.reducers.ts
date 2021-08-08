import { USERCONSTANTS } from '../constants/user.constants';
import { ActionProps } from '../types/user.types';
import { StateProps } from '../types/state.types';


let user = JSON.parse(localStorage.getItem('user') || '{}');
const initialState = user ? { loggedIn: true, user } : {};

export const authentication = (state: StateProps = initialState, action: ActionProps) => {
    switch (action.type) {
        case USERCONSTANTS.LOGIN_REQUEST:
            return {
                loggingIn: true,
                user: action.user
            };
        case USERCONSTANTS.LOGIN_SUCCESS:
            return {
                loggedIn: true,
                user: action.user
            };
        case USERCONSTANTS.LOGIN_FAILURE:
            return {};
        case USERCONSTANTS.LOGOUT:
            return {};
        default:
            return state
    }
}
