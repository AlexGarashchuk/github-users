import React, { useState, useEffect } from "react";
import "./App.css";
import UsersList from "./Components/List";
import Profile from "./Components/UserProfile";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import { Grid } from "@material-ui/core";

function App() {
  const [users, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`https://api.github.com/users`);
      setData(result.data);
    };
    fetchData();
  }, []);
  return (
    <Router>
      <Route exact path="/">
        <UsersList data={users} />
      </Route>
      {users.map((data) => (
        <Route path={`/${data.login}`} key={data.id}>
          <Profile login={data.login} />
        </Route>
      ))}
    </Router>
  );
}

export default App;
