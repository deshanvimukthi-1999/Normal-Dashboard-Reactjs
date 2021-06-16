import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";
import './App.css';
import Home from './components/Pages/Home';
import Dashboard from './components/Pages/Dashboard';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nopage from './components/Pages/Nopage';
import NotFoundPage from './components/Pages/NotFoundPage';
import { Menu } from "./components/Pages/Menu";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route exact path="/menu">
            <Menu />
          </Route>
          <Route exact path="/nopage">
            <Nopage />
          </Route>
           <Route component={NotFoundPage} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;