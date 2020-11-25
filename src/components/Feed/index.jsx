import React, {Component} from 'react'
import mainApi from '../../services/mainApi'
import to from 'await-to-js'

class Feed extends Component{
  constructor(props){
    super(props)

    this.state={}
  }

  componentDidMount = async() => {
    const [err, response] = await to(mainApi.post("/", {
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

    if(err) console.log("Erro")

    console.log(response)
  }
  
  render(){
    return(
      <></>
    )
  }
}

export default Feed