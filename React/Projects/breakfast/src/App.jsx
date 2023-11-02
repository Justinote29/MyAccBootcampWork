import "./App.css";
import "./components/Catering";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Catering from "./components/Catering";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="content">
        <Switch>
          <Route exact path="/">
            {Home}
          </Route>
          <Route path="/menu">{Menu}</Route>
          <Route path="/catering">{Catering}</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
