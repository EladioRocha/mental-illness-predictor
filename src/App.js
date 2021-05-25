import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import "./App.css"
import Quiz from "./components/Quiz/Quiz"
import Home from "./components/Home/Home"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </Router>
  );
}

export default App;
