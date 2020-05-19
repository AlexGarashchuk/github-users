import React from "react";
import "./App.css";
import UsersList from "./Components/List";
import BasicPagination from "./Components/Pagination";
import Profile from "./Components/UserProfile";
import { Switch } from "@material-ui/core";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const dataFromLocalFile = require(`./data.json`);
  console.log(dataFromLocalFile);
 
  return (
    <div>
      <div>
        <Router>
          {/* {dataFromLocalFile.map((data) => ( */}
            <div>
              <Route exact path="/">
                <UsersList data={dataFromLocalFile} />
              </Route>
              {/* <Route path={`/${data.login}`}> */}
                {/* <Profile userData={data.avatar_url}/> */}
              {/* </Route> */}
            </div>
          {/* ))} */}
        </Router>
      </div>
    </div>
  );
}

export default App;
