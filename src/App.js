import './App.css';

// browser router components
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// pages
import Home from "./pages/Home/Home.js"
import Study from "./pages/Study/Study.js"
import Test from "./pages/Test/Test.js"

// drawer & banner, footer
import DrawerComponent from './components/drawer/DrawerComponent.js'

function App() {


  return (
    <Router>
      <div>
        <DrawerComponent />
        <Switch>
          <Route path="/study" exact component={Study} />
          <Route path="/test" exact component={Test} />
          <Route path="/" exact component={Home} />
        </Switch>
      </div>
      {/* <Footer /> */}
    </Router>

  );
}

export default App;
