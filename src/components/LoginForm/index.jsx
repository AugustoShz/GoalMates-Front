import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { Wrapper } from './styles'
import Logo from '../../assets/LogoPretoTransparente.svg'
import axios from 'axios'

class LoginForm extends Component{
  constructor(props){
    super(props)

    this.loginRef = React.createRef()
    this.passwordRef = React.createRef()

    this.state={
      login: '',
      password: ''

    }
  }

  handleLoginChange = () => {
    if(this.loginRef.current) {
      this.setState({
        login: this.loginRef.current.value
      })
    }
  }

  handlePasswordChange = () => {
    if(this.passwordRef.current) {
      this.setState({
        password: this.passwordRef.current.value
      })
    }
  }

  handleSendClick = async () => {
    const { password, login } = this.state
    const response = await axios.post("https://guarded-coast-12869.herokuapp.com/", {query:
    `mutation{
      login(username:"${login}", password:"${password}"){
          id
          email
          token
          username
          createdAt
        }
      }`})

    if(response.data.data) console.log(response.data.data)
  }

  handleForgotPasswordClick = () => {

  }

  render(){
    return(
      <Wrapper>
        <div className="login-logo">
          <img src={Logo} alt="Logo" />
          <div className="login-logo-texto">
            <span>Traga seus objetivos</span>
            <span style={{marginLeft:"100px"}}>para a Realidade</span>
          </div>
        </div>
        <div className="login-form">
          <TextField variant="outlined" label="Email ou usuário" inputRef={this.loginRef} onChange={this.handleLoginChange}/>
          <TextField variant="outlined" label="Senha" type="password" inputRef={this.passwordRef}  onChange={this.handlePasswordChange}/>
          <button className="login-forgot-password" onClick={this.handleForgotPasswordClick}>Esqueci minha senha</button>
          <button onClick={this.handleSendClick}>Entrar</button>
        </div>
      </Wrapper>
    )
  }
}

export default LoginForm