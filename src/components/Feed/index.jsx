import React, {Component} from 'react'
import mainApi from '../../services/mainApi'
import to from 'await-to-js'
import { SideBar, PostTemplate } from '../' //Components
import { Wrapper } from './styles'


class Feed extends Component{
  constructor(props){
    super(props)

    this.state={ 
      posts: []
    }
  }

  getPosts = async () => {
    const [postErr, posts] = await to(mainApi.post("/", {
      query:
        `query {
          getPosts {
            id
            body
            createdAt
            username
            comments{
              id
              username
              body
            }
          }
        }
        `
    }))

    if(postErr) {
      console.log("Erro ao buscar feed") 
      return
  }

    this.setState({
      posts: posts.data.data.getPosts
    })
  }

  componentDidMount = async() => {
    await this.getPosts();
  }
  
  render(){
    const { posts } = this.state

    return(
      <>
      <SideBar open right></SideBar>
      <Wrapper>
        {
          posts.length ?
          posts.map(post => <PostTemplate />) :
          <span className="no-posts">Não há nenhuma publicação</span>
        }
      </Wrapper>
      </>
    )
  }
}

export default Feed