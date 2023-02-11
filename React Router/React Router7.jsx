import { BrowserRouter, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import GithubUserList from "./GithubUserList";
import ShowGithubUser from "./ShowGithubUser";

const Routes = () => (
  <>
    <Route exact path="/" component={() => <Welcome name="User" />} />
    <Route exact path="/counter" component={Counter} />
    <Route exact path="/users">
      <Route
        exact
        path="/users"
        render={() => (
          <div>
            <h3>Add a user and select it</h3>
            <GithubUserList />
          </div>
        )}
      />
      <Route
        exact
        path="/users/:username"
        component={({ match }) => (
          <ShowGithubUser username={match.params.username} />
        )}
      />
    </Route>
    <Route
      render={() => (
        <div>
          <h1>404 Not Found</h1>
        </div>
      )}
    />
  </>
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
          <Link to="/users">Github User List</Link>
        </li>
      </ul>
    </nav>
    <Routes />
  </BrowserRouter>
);

export default App;
