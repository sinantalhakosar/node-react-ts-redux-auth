import { ALERTCONSTANTS } from '../constants/alert.constants';
import { AlertProps } from '../types/alert.types';

export const success = ({message}: Pick<AlertProps, 'message'>) => {
    return { type: ALERTCONSTANTS.SUCCESS, message };
}

export const error = ({message}: Pick<AlertProps, 'message'>) => {
    return { type: ALERTCONSTANTS.ERROR, message };
}

export const clear = () => {
    return { type: ALERTCONSTANTS.CLEAR };
}