import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ListOfLists from "./components/listOfLists/ListOfLists";

import List from "./components/list/List";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={ListOfLists}></Route>
        <Route path="/lista/:id">
          <List></List>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
