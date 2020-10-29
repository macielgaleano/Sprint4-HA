import { BrowserRouter as Router, Route } from "react-router-dom";
import Counter from "./components/Counter/Counter";

function App() {
  return (
    <Router>
      <Route to="/" exact={true} component={Counter}></Route>
    </Router>
  );
}

export default App;

// NavLink,
// Redirect,
// Switch,
