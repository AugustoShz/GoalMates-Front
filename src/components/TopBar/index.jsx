import React, { Component } from "react";
import { Wrapper } from "./styles";
import { InputBase } from "@material-ui/core";
import { HomeOutlined, Brightness7 as Config, Menu } from "@material-ui/icons";
import Logo from "../../assets/LogoPretoTransparente.svg";
import { withStyles } from "@material-ui/core/styles";

const SearchTextField = withStyles({
  input: {
    backgroundColor: "white",
    padding: "5px",
    borderRadius: "20px",
  },
})(InputBase);

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      handleBurgerClick,
      handleHomeClick,
      handleConfigClick,
    } = this.props;
    return (
      <Wrapper>
        <div className="top-bar-left">
          <Menu
            style={{ fontSize: "40px", cursor: "pointer" }}
            onClick={handleBurgerClick}
          />
          <HomeOutlined
            style={{ fontSize: "40px", cursor: "pointer" }}
            onClick={handleHomeClick}
          />
          <img src={Logo} alt="logo" />
        </div>
        <SearchTextField rowsMax={1} />
        <div className="top-bar-right">
          <Config
            style={{ fontSize: "40px", cursor: "pointer" }}
            onClick={handleConfigClick}
          />
        </div>
      </Wrapper>
    );
  }
}

export default TopBar;
