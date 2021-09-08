import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import OneStarInfo from "./components/starinfo/OneStarInfo";
import TwoStarInfo from "./components/starinfo/TwoStarInfo";
import ThreeStarInfo from "./components/starinfo/ThreeStarInfo";
import React, { useState, useEffect } from "react";
import { AuthProvider } from "./components/auth/contexts/AuthContext";
import SignUp from "./components/auth/SignUp";
import Login from "./components/auth/Login";
import UserNotes from "./components/UserNotes";

export const ThemeContext = React.createContext();

function App() {
  const [fullList, setFullList] = useState("");

  const getLists = async () => {
    const visitedList = await axios.get("/api/users_visited_restaurants");
    setFullList(visitedList.data);
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <>
      <ThemeContext.Provider value={fullList}>
        <BrowserRouter>
          <Switch>
            <AuthProvider>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/" component={Home} exact />
              <Route path="/profile" component={Profile} starList={fullList} />
              <Route path="/onestarinfo" component={OneStarInfo} />
              <Route path="/twostarinfo" component={TwoStarInfo} />
              <Route path="/threestarinfo" component={ThreeStarInfo} />
              <Route path="/usernotes" component={UserNotes} />
            </AuthProvider>
          </Switch>
        </BrowserRouter>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
