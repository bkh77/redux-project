import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Positions from "./pages/Positions";

function App() {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <Link to="/positions"><button className="btn btn-outline-primary" >Lavozimlar</button></Link> 
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Switch>
            <Route path={'/positions'} component={Positions} /> 
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
