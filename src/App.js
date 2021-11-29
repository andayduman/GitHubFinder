// import logo from "./logo.svg";
import "./App.css";
//If you wanted to return elements without having them nested in a parent div, use Fragment
import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import User from "./components/users/User";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import axios from "axios";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const github = axios.create({
  baseURL: "https://api.github.com",
  timeout: 1000,
  headers: { Authorization: process.env.REACT_APP_GITHUB_TOKEN },
});

// Converted "function App()" to "class App()" and it needs to extend React.Component
const App = () => {
  //Custom async useEffect function to display 30 random users when first opening the application
  // useEffect(async () => {
  //   gisetLoading(true);
  //   const res = await axios.get("https://api.github.com/users");
  //   setUsers(res.data);
  //   setLoading(false);
  // }, []);

  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/user/:login" component={User}></Route>
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );
};

export default App;
