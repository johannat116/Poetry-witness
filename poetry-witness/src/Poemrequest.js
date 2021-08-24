import React, {Component} from 'react'
import axios from 'axios'
import Form from './Form'

class Poemrequest extends Component {
    constructor (props){
        super(props)

        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            this.setState ({
                posts:response.data
            })
            console.log(response.data)
        })
    }

    render () {
        const {posts}= this.state

        return(
            <div className="requests">

              <Form/>
              
                {
               
                posts.map(post => <div key= {posts.userId}>{posts.title}</div>)

                }

            </div>





        )
    }
}
export default Poemrequest