import { BrowserRouter, Route } from "react-router-dom";
import Welcome from "./Welcome";

const Routes = () => (
  <BrowserRouter>
    <Route path="/" exact render={(props) => <Welcome name="John" />} />
  </BrowserRouter>
);

const App = () => <Routes />;

export default App;
