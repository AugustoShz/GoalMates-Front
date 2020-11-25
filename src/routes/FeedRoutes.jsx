import React, { Component } from "react";
import { Route } from "react-router-dom";
import { TopBar, SideBar } from "../components";
import mainApi from '../services/mainApi'

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleBurgerClick = () => {
    const {open} = this.state

    if (open) this.setState({open: false})
    else this.setState({open: true})

  }

  handleHomeClick = () =>{
    window.location.reload(false);
  }

  render() {
    const { path, component, ...rest } = this.props;
    const { open } = this.state

    return (
      <>
        <div style={{display:"grid", gridTemplateRows:"5% 95%", height: "100vh"}}>
          <TopBar handleBurgerClick={this.handleBurgerClick} handleHomeClick = {this.handleHomeClick}/>
          <div style={{height: "100%"}}>
            <SideBar open={open}/>
            <Route path={path} component={component} {...rest} ></Route>
          </div>
        </div>
      </>
    );
  }
}

export default Routes;
