import React, { Component } from "react";
import {Wrapper} from './styles'

class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { open } = this.props
    return (
      <Wrapper>
        <div className={open ? "animate-left" : "animate-right"}>

        </div>
      </Wrapper>
    );
  }
}

export default TopBar;
