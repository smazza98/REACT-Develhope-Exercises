import { BrowserRouter, Route } from "react-router-dom";
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
    <Routes />
  </BrowserRouter>
);

export default App;
