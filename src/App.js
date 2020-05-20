import React from "react";
import "./App.scss";

import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="wrapper">
            <div className="home">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/opportunities" component={Opportunities} />
                <Route exact path="/solutions" component={Solutions} />
                <Route exact path="/contact-us" component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

function Opportunities() {
  return <p>Discover our numerous opportunities</p>;
}

function Solutions() {
  return <p>Solutions that help you.</p>;
}

function Contact() {
  return <p>Feel free to reach us.</p>;
}

function Home() {
  return (
    <div className="container">
      <div className="wrapper">
        <h5>
          The <b>React Animations</b>, Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Sed commodi quas incidunt iste enim, perferendis
          autem voluptates, esse, quae architecto asperiores? Possimus deserunt
          amet veritatis natus ducimus quia dolorem, laborum perspiciatis
          dolorum facilis eum animi totam sit, aperiam aliquid nam itaque
          perferendis eaque suscipit obcaecati cumque! Consequuntur est aliquam
          itaque.
        </h5>
      </div>
    </div>
  );
}
export default App;
