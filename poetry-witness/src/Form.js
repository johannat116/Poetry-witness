import React, {Component} from 'react'

class Form extends Component {

constructor (props) {
    super(props)

    this.state={
        userID:'',
        title:'',
        body:'',
    }
}

handleChange =(e) => {
    this.setState({
    [e.target.name]: e.target.value

    })
}

handleSubmit =(e) => {
    e.preventDefault()
console.log(this.state)

}



    render () {
        const {userID, title, body}=this.state
        return (
            <div>
            <form onSubmit ={this.handleSubmit}>
             

         <div >
    <label>Name</label>
<input type='text'
name='userID'
value={userID}
onChange={this.handleChange}
></input>
</div>

<div >
    <label>Email</label>
<input type='text'
name='title'
value={title}
onChange={this.handleChange}
></input>
</div>

<div >
    <label >Request</label>
<input type='text'
name='body'
value={body}
onChange={this.handleChange}
></input>
</div>
<div >
<button type='submit'>Submit</button>
    </div>
    

 
</form>

         </div>





        )
    }
}
export default Form