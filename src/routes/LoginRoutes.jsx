import React, { Component } from 'react'
import { Route } from 'react-router-dom'

class Routes extends Component{
  constructor(props){
    super(props)

    this.state={}
  }

  render(){
    const { path, component, ...rest } = this.props

    return(
      <Route path={path} component={component} {...rest}/>
    )
  }
}

export default Routes
