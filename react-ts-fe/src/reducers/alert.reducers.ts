import { ALERTCONSTANTS } from '../constants/alert.constants';
import { AlertProps } from '../types/alert.types';

export const alert = (state = {}, action: AlertProps) => {
    switch (action.type) {
        case ALERTCONSTANTS.SUCCESS:
            return {
                type: 'alert-success',
                message: action.message
            };
        case ALERTCONSTANTS.ERROR:
            return {
                type: 'alert-danger',
                message: action.message
            };
        case ALERTCONSTANTS.CLEAR:
            return {};
        default:
            return state
    }
}