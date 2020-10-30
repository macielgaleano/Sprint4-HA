import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./components/Counter/Counter";
import BuyList from "./components/BuyList/BuyList";

function App() {
  return (
    <Router>
      <Route to="/" exact={true} component={BuyList}></Route>
      <Route to="/counter" component={Counter}></Route>
    </Router>
  );
}

export default App;

// NavLink,
// Redirect,
// Switch,
