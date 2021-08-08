import { ALERTCONSTANTS } from '../constants/alert.constants';

export interface AlertProps {
    type: ALERTCONSTANTS;
    message: string;
}