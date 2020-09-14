import React, { useState } from "react";
import { Route } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import PrivateRoute from "./PrivateRoute";
import BubblePage from './components/BubblePage';

function App() {

  const [token, setToken] = useState(localStorage.getItem("token") || null);

  return (
      <div className="App">
        <Route exact path="/">
          <Login token={token} setToken={setToken}/>
        </Route>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path='/bubble-page' component={BubblePage} />
      </div>
  );
}

export default App;
