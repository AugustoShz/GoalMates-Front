import React, { Component } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import LoginRoutes from "./routes/LoginRoutes";
import FeedRoutes from "./routes/FeedRoutes";
import { LoginForm, Feed } from "./components";

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <LoginRoutes path="/" component={LoginForm} exact />
          <FeedRoutes path="/feed" component={Feed} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
