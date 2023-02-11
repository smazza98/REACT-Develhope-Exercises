import { BrowserRouter, Route, Link } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";

const Routes = () => (
  <>
    <Route exact path="/" component={() => <Welcome name="User" />} />
    <Route exact path="/counter" component={Counter} />
    <Route exact path="/users/:username" component={ShowGithubUser} />
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
          <Link to="/users/:username">Show Github User</Link>
        </li>
      </ul>
    </nav>
    <Routes />
  </BrowserRouter>
);

export default App;
