import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./Welcome";
import Counter from "./Counter";

const Routes = () => (
  <>
    <Route exact path="/" component={() => <Welcome name="User" />} />
    <Route exact path="/counter" component={Counter} />
  </>
);

const App = () => (
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);

export default App;
