import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Mailbox from "./components/pages/Mailbox";

function App() {
  return (
    <div className="flex flex-col justify-between h-full">
      <Router>
        <Header />
        <Switch>
          <Route path="/offers" />
          <Route path="/requests" />
          <Route path="/signin" />
          <Route path="/signup" />
          <Route path="/mailbox" component={Mailbox} />
          <Route path="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
