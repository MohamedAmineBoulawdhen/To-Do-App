import "./index";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Planned from "./components/Planned";
import Sidebar from "./components/Sidebar";
import Addtask from "./components/Addtask";
import Completed from "./components/Completed";
function App() {
  return (
    <>
      {" "}
      <Sidebar />
      <article className="main">
        <Addtask />
      </article>
      <Switch>
        <Route exact path="/">
          <Home />
          <div id="hidendiv"></div>
        </Route>
        <Route path="/planned">
          <Planned />
          <div id="hidendiv"></div>
        </Route>
        <Route path="/completed">
          <Completed />
          <div id="hidendiv"></div>
        </Route>
      </Switch>
    </>
  );
}

export default App;
