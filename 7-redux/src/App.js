import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import BuyList from "./components/BuyList/BuyList";

function App() {
  return (
    <Router>
      <Switch>
        <Route to="/" exact={true} component={BuyList}></Route>
        <Route to="/counter" component={Counter}></Route>
      </Switch>
    </Router>
  );
}

export default App;

// NavLink,
// Redirect,
// Switch,
