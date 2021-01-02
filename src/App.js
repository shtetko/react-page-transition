import React from "react";
import {
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageOne from "./components/PageOne";
import PageTwo from "./components/PageTwo";
import PageThree from "./components/PageThree";
import "./App.css";

const pageVariants = {
  visible: {
    opacity: 1,
    y: 0
  },
  hidden: {
    opacity: 0,
    y: 100
  }
}

const pageTransitions = {
  type: "tween",
  ease: "easeOut",
  duration: 0.3
}

const App = props => {
  const location = useLocation();
  
  return (
    <div>
      <ul className="nav-bar">
        <li><Link to="/">Page One</Link></li>
        <li><Link to="/page-two">Page Two</Link></li>
        <li><Link to="/page-three">Page Three</Link></li>
      </ul>
      
      <AnimatePresence exitBeforeEnter>
        <Switch location={ location } key={ location.pathname } >
          <Route path="/page-three">
            <PageThree variants={ pageVariants } transition={ pageTransitions } />
          </Route>
          <Route path="/page-two">
            <PageTwo variants={ pageVariants } transition={ pageTransitions } />
          </Route>
          <Route path="/">
            <PageOne variants={ pageVariants } transition={ pageTransitions } />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;