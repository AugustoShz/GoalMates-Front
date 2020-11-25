import React, { Component } from 'react'
import { TextField } from '@material-ui/core'
import { Wrapper } from './styles'
import mainApi from '../../services/mainApi'
import Logo from '../../assets/LogoPretoTransparente.svg'
import Swal from 'sweetalert2'
import to from 'await-to-js'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.loginRef = React.createRef()
    this.passwordRef = React.createRef()

    this.state = {
      login: '',
      password: ''
    }
  }


  showError(message) {
    Swal.fire({
      icon: 'error',
      text: message
    })
  }

  handleLoginChange = () => {
    if (this.loginRef.current) {
      this.setState({
        login: this.loginRef.current.value
      })
    }
  }

  handlePasswordChange = () => {
    if (this.passwordRef.current) {
      this.setState({
        password: this.passwordRef.current.value
      })
    }
  }

  handleSendClick = async () => {
    localStorage.clear()
    const { password, login } = this.state

    const [err, response] = await to(mainApi.post("/", {
      query:
        `mutation{
      login(username:"${login}", password:"${password}"){
          id
          token
        }
      }`
    }))

    if (err) this.showError(err.response.data.message || "Erro desconhecido")

    if (response.data.data) {
      const { id, token } = response.data.data.login

      if (id) localStorage.setItem("UserId", id)
      else {
        localStorage.clear()
        this.showError("Houve um problema com o seu login!")
        return
      }

      if (token) localStorage.setItem("UserToken", `Bearer ${token}`)
      else {
        localStorage.clear()
        this.showError("Houve um problema com o seu login!")
        return
      }

      this.props.history.push("/feed")
      
    }
    else this.showError("Usuário ou senha invalidos!")

  }

  handleForgotPasswordClick = () => {


  }

  render() {
    return (
      <Wrapper>
        <div className="login-logo">
          <img src={Logo} alt="Logo" />
          <div className="login-logo-texto">
            <span>Traga seus objetivos</span>
            <span style={{ marginLeft: "100px" }}>para a Realidade</span>
          </div>
        </div>
        <div className="login-form">
          <TextField variant="outlined" label="Email ou usuário" inputRef={this.loginRef} onChange={this.handleLoginChange} />
          <TextField variant="outlined" label="Senha" type="password" inputRef={this.passwordRef} onChange={this.handlePasswordChange} />
          <button className="login-forgot-password" onClick={this.handleForgotPasswordClick}>Esqueci minha senha</button>
          <button onClick={this.handleSendClick}>Entrar</button>
        </div>
      </Wrapper>
    )
  }
}

export default LoginForm