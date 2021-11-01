import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import AddContact from "./components/addContact";
import EditContact from "./components/editContact";
import Home from "./components/home";
import NavBar from "./components/navbar";

export default function App() {
  return (
    <div className="App">
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={AddContact} />
        <Route path="/edit/:id" component={EditContact} />
      </Switch>
    </div>
  );
}
