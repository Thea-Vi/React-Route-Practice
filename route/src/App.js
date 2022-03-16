import "./App.css";
import Home from "./Components/Home";
import { Switch, Route, Link } from "react-router-dom";
import Hello from "./Components/Hello";
import Number from "./Components/Number";
import HelloBlueRed from "./Components/HelloBlueRed";

function App() {
  return (
    <div className="App">
      <h2>Routes</h2>
      <Link to="/home">Home</Link>
      <Link to="/text">Hello</Link>
      <Link to="/hello/blue/red">Change Color</Link>
      <Link to="/id">Number</Link>
     

      <Switch>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/hello/:blue/:red">
          <HelloBlueRed />
        </Route>

        <Route path="/:text">
          <Hello />
        </Route>
        
        <Route path="/:id">
          <Number />
        </Route>


        
  



      </Switch>
    </div>
  );
}

export default App;
