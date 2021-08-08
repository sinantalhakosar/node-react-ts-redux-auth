import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers/history';
import { PrivateRoute } from './components/PrivateRoute';
import { HomePage } from './routes/Homepage';
import { LoginPage } from './routes/LoginPage';

function App() {
  return (
    <Router history={history}>
      <Switch>
          <PrivateRoute exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Redirect from="*" to="/" />
      </Switch>
    </Router>
  );
}

export default App;
