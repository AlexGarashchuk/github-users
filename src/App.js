import React from "react";
import "./App.css";
import UsersList from "./Components/List";
import Profile from "./Components/UserProfile";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  const dataFromLocalFile = require(`./data.json`);
  console.log(dataFromLocalFile);
 
  return (
    <div>
      <div>
        <Router>
         
            <div>
              <Route exact path="/">
                <UsersList data={dataFromLocalFile} />
              </Route>
               {dataFromLocalFile.map((data) => (
              <Route path={`/${data.login}`} key={data.id}>
                <Profile login={data.login}/>
              </Route>
              ))}
            </div>
          
        </Router>
      </div>
    </div>
  );
}

export default App;
