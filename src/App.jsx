import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Positions from "./pages/Positions";
import AcademicDegrees from "./pages/AcademicDegrees";
import Staffs from "./pages/Staffs";

function App() {
  return (
    <div className="container">
      <div className="row my-3">
        <div className="col">
          <Link to="/positions">
            <button className="btn btn-outline-primary">Lavozimlar</button>
          </Link>{" "}
          <Link to="/degrees">
            <button className="btn btn-outline-primary">Ilmiy darajalar</button>
          </Link>{' '}
          <Link to="/staff">
            <button className="btn btn-outline-primary">Xodimlar</button>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Switch>
            <Route path={"/positions"} component={Positions} />
            <Route path={"/degrees"} component={AcademicDegrees} />
            <Route path={"/staff"} component={Staffs} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
