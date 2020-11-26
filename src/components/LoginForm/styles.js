import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: #dddddd;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;

  .login-logo{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction:column;

    img{
      height: 80%;
      width: 80%;
    }

    .login-logo-texto{
      display:flex;
      flex-direction:column;
      position: relative;
      bottom: 50px;
      left: 100px;
      font-size: 20px;
    }

    @media(max-width: 800px){
      .login-logo-texto{
        bottom: 40px;
        left: 100px;
        font-size: 16px;
      }
    }

    @media(max-width: 600px){
      .login-logo-texto{
        flex-direction: row;
        bottom: 30px;
        left: 50px;
        font-size: 12px;
      }
      span{
        margin: 0 !important;
        margin-right: 2px !important;
      }
    }

    @media(max-width: 400px){
      .login-logo-texto{
        flex-direction: row;
        bottom: 15px;
        left: 30px;
        font-size: 6px;
      }
      span{
        margin: 0 !important;
        margin-right: 2px !important;
      }
    }
  }

  .login-form{
    justify-self:center;
    width: 50%;
    background-color: white;
    padding: 20px;
    display: flex;
    flex-direction:column;
    gap:5px;

    button{
      background-color:#7b68ee;
      color: #FFFFFF;
      border-radius: 5px;
      border-color: white;
      height: 30px;
      outline: none;
      cursor: pointer;
    }

    .login-form-signup{
      background-color: green;
    }

    .login-forgot-password{
      background-color: transparent;
      border:none;
      color: #7b68ee;
      align-self: flex-end;
      margin:0;
      height: fit-content;

      :hover{
        color:black;
      }

      :active{
        color:#7b68ee;
      }
    }
  }


  @media(max-width:600px){
    display: flex;
    flex-direction: column;
  }
`

export const Line = styled.div`
border-top: solid black 1px;
width: 100%;
margin-top: 5px;
margin-bottom: 5px;
`

export const ModalCard = styled.div`
background-color: white;
border-radius: 20px;
outline: none;
padding: 15px;
width: 50%;
display: flex;
flex-direction: column;
gap: 15px;
`