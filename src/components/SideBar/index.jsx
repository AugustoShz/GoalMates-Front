import React, { Component } from "react";
import {Wrapper} from './styles'

class SideBar extends Component {
  constructor(props) {
    super(props);

    this.state={}
  }

  classNameSelect(){
    const {open, right} = this.props

    if(open) return "animate-open-" + (right ? "right" : "left")
    else return "animate-close-" + (right ? "right" : "left")

  }

  render() {
    const { handleClose, children } = this.props

    return (
      <Wrapper>
        <div className={this.classNameSelect()} onMouseLeave={handleClose}>
          {children}
        </div>
      </Wrapper>
    );
  }
}

export default SideBar;
