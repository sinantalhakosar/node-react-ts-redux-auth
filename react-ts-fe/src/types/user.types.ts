import { USERCONSTANTS } from '../constants/user.constants';

export interface UserProps {
    username: string;
    password: string;
}

interface TeamProps {
    id: string;
    name: string;
    imageLink: string;
}

export interface ClientProps {
    username: string;
    team: TeamProps;
    token: any;
}

export interface ActionProps {
    type: USERCONSTANTS;
    user: UserProps;
}
