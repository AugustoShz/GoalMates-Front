import React, {Component} from 'react'
import {Wrapper} from './styles'

class PostTemplate extends Component{
render(){
  const { post } = this.props

  return(
    <Wrapper>
      <p>{post.username}</p>
      <p>{post.body}</p>
      <p>{post.createdAt}</p>
    </Wrapper>
  )
}
}

export default PostTemplate