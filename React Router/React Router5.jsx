import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={() => <Welcome name="User" />} />
    <Route exact path="/counter" component={Counter} />
    <Route exact path="/users/:username" component={ShowGithubUser} />
    <Route render={() => <h1>404 - Not Found</h1>} />
  </Switch>
);

const App = () => (
  <BrowserRouter>
    <nav>
      <ul>
        <li>
          <Link to="/">Welcome</Link>
        </li>
        <li>
          <Link to="/counter">Counter</Link>
        </li>
        <li>
          <Link to="/users/username">Github User</Link>
        </li>
      </ul>
    </nav>
    <Routes />
  </BrowserRouter>
);

export default App;
