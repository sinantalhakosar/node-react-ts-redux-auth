import { UserProps } from './user.types';

export interface StateProps {
    loggingIn?: boolean;
    loggedIn?: boolean;
    user?: UserProps;
}