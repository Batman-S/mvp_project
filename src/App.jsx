import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Test2 from "./components/Test2";
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  const [user, setUser] = useState("");
  const result = [];
  const getUser = async () => {
    const { data: user } = await axios.get("/api/users");
    setUser(user[0].name);
    result.push(user[0].name);
  };

  getUser();

  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/api" component={Test2} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
