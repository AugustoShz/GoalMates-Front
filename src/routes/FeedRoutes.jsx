import React, { Component } from "react";
import { Route } from "react-router-dom";
import { TopBar, SideBar } from "../components";
import { noToolbar } from '../assets/styles';

class Routes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
  }

  handleBurgerClick = () => {
    this.setState({
      open: true
    })
  }

  handleHomeClick = () =>{
  }

  handleClose = () => {
    this.setState({
      open:false
    })
  }

  render() {
    const { path, component, ...rest } = this.props;
    const open  = this.state.open
    return (
      <noToolbar style={{overflowX: "hidden", maxWidth: "100vw"}}>
        <SideBar open={open} handleClose={this.handleClose}/>
        <div style={{display:"grid", gridTemplateRows:"50px auto", height: "100vh"}}>
          <TopBar handleBurgerClick={this.handleBurgerClick} handleHomeClick = {this.handleHomeClick} hasBurger/>
          <div style={{height: "100%", display: "flex"}}>
            <Route path={path} component={component} {...rest} />
          </div>
        </div>
      </noToolbar>
    );
  }
}

export default Routes;
