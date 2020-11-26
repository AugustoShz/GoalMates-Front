import React, { Component } from "react";
import { TextField, Modal } from "@material-ui/core";
import { Wrapper, Line, ModalCard } from "./styles";
import mainApi from "../../services/mainApi";
import Logo from "../../assets/LogoPretoTransparente.svg";
import Swal from "sweetalert2";
import to from "await-to-js";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.loginRef = React.createRef();
    this.passwordRef = React.createRef();
    this.usernameRef = React.createRef();
    this.emailRef = React.createRef();
    this.signupPasswordRef = React.createRef();
    this.confirmPassRef = React.createRef();

    this.state = {
      login: "",
      password: "",
      signupPassword: "",
      confirmPass: "",
      username: "",
      email: "",
      openSignUp: false,
    };
  }

  showError(message) {
    Swal.fire({
      icon: "error",
      text: message,
    });
  }

  handleLoginChange = () => {
    if (this.loginRef.current) {
      this.setState({
        login: this.loginRef.current.value,
      });
    }
  };

  handlePasswordChange = () => {
    if (this.passwordRef.current) {
      this.setState({
        password: this.passwordRef.current.value,
      });
    }
  };
  
  handleSignUpPasswordChange = () => {
    if (this.signupPasswordRef.current) {
      this.setState({
        signupPassword: this.signupPasswordRef.current.value,
      });
    }
  };

  handleEmailChange = () =>{
    if (this.emailRef.current) {
      this.setState({
        email: this.emailRef.current.value,
      });
    }
  }

  handleConfirmPassChange = () =>{
    if (this.confirmPassRef.current) {
      this.setState({
        confirmPass: this.confirmPassRef.current.value,
      });
    }
  }

  
  handleUsernameChange = () =>{
    if (this.usernameRef.current) {
      this.setState({
        username: this.usernameRef.current.value,
      });
    }
  }

  handleOpenSignUp = () => {
    this.setState({
      openSignUp: true,
    });
  };

  handleCreateUser = async() => {
    localStorage.clear();
    const { signupPassword, email, confirmPass, username } = this.state;

    this.setState({
      openSignUp: false
    })

    const [err, response] = await to(
      mainApi.post("/", {
        query: `
        mutation{
          register(registerInput:{
            username:"${username}"
            password:"${signupPassword}"
            confirmPassword:"${confirmPass}"
            email:"${email}"
          }){
            id
            email
            token
            username
            createdAt
          }
        }`,
      })
    );
    
    if (err) {
      this.showError("Erro!\n" + err);
      console.log(err)
      console.log(response)
      return
    };
    if (response.data.data) {
      const { id, token } = response.data.data.register;

      if (id) localStorage.setItem("UserId", id);
      else {
        localStorage.clear();
        this.showError("Houve um problema com o seu login!");
        return;
      }

      if (token) localStorage.setItem("UserToken", `Bearer ${token}`);
      else {
        localStorage.clear();
        this.showError("Houve um problema com o seu login!");
        return;
      }

      this.props.history.push("/feed");
    } 
  }

  handleSendClick = async () => {
    localStorage.clear();
    const { password, login } = this.state;

    const [err, response] = await to(
      mainApi.post("/", {
        query: `mutation{
      login(username:"${login}", password:"${password}"){
          id
          token
        }
      }`,
      })
    );

    if (err) this.showError(err.response.data.message || "Erro desconhecido");

    if (response.data.data) {
      const { id, token } = response.data.data.login;

      if (id) localStorage.setItem("UserId", id);
      else {
        localStorage.clear();
        this.showError("Houve um problema com o seu login!");
        return;
      }

      if (token) localStorage.setItem("UserToken", `Bearer ${token}`);
      else {
        localStorage.clear();
        this.showError("Houve um problema com o seu login!");
        return;
      }

      this.props.history.push("/feed");
    } else this.showError("Usuário ou senha invalidos!");
  };

  handleForgotPasswordClick = () => {

  };

  render() {
    const { openSignUp } = this.state;

    return (
      <Wrapper>
        <Modal
          open={openSignUp}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ModalCard>
            <h2 id="transition-modal-title">Cadastro</h2>

            <TextField
              variant="outlined"
              label="Email"
              inputRef={this.emailRef}
              onChange={this.handleEmailChange}
            />
            <TextField
              variant="outlined"
              label="Nome de Usuário"
              inputRef={this.usernameRef}
              onChange={this.handleUsernameChange}
            />
            <TextField
              variant="outlined"
              label="Senha"
              type="password"
              inputRef={this.signupPasswordRef}
              onChange={this.handleSignUpPasswordChange}
            />
            <TextField
              variant="outlined"
              label="Confirmação de Senha"
              type="password"
              inputRef={this.confirmPassRef}
              onChange={this.handleConfirmPassChange}
            />
            <button
              className="login-form-signup"
              onClick={this.handleCreateUser}
            >
              Criar
            </button>
          </ModalCard>
        </Modal>
        <div className="login-logo">
          <img src={Logo} alt="Logo" />
          <div className="login-logo-texto">
            <span>Traga seus objetivos</span>
            <span style={{ marginLeft: "100px" }}>para a Realidade</span>
          </div>
        </div>
        <div className="login-form">
          <TextField
            variant="outlined"
            label="Nome de Usuário"
            inputRef={this.loginRef}
            onChange={this.handleLoginChange}
          />
          <TextField
            variant="outlined"
            label="Senha"
            type="password"
            inputRef={this.passwordRef}
            onChange={this.handlePasswordChange}
          />
          {/* <button className="login-forgot-password" onClick={this.handleForgotPasswordClick}>Esqueci minha senha</button> */}
          <button onClick={this.handleSendClick}>Entrar</button>
          <Line />
          <button className="login-form-signup" onClick={this.handleOpenSignUp}>
            Cadastro
          </button>
        </div>
      </Wrapper>
    );
  }
}

export default LoginForm;
