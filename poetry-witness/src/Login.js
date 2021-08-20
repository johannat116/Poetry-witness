import {BrowserRouter as Router, Route } from 'react-router-dom'
import MySavedPoems from "./MySavedPoems"


const Login = () => {
    return (
        <Router>

        <div>
            
            <a href="/MySavedPoems" className="account">My Saved Poems</a>
            <Route path ='/MySavedPoems' component={MySavedPoems}/>
            <MySavedPoems/>

          
        </div>
         </Router>
    )
}

export default Login
