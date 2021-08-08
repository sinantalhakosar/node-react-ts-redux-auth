import { Link } from 'react-router-dom';
import { useSelector, RootStateOrAny } from 'react-redux';

export const HomePage = () => {
    const user = useSelector((state: RootStateOrAny) => state.authentication.user);

    return (
        <div className="col-lg-8 offset-lg-2">
            <h1>Hi {user.firstName}!</h1>
            <p>You're logged in with React Hooks!!</p>
            <p>
                <Link to="/login">Logout</Link>
            </p>
        </div>
    );
}
