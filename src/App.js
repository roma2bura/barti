
import {  BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./home";

function App() {

  return (
    <BrowserRouter>
          <Switch>
                <Route path="/:search" component={Home} />
          </Switch>
      </BrowserRouter>

      
  );
}

export default App;
