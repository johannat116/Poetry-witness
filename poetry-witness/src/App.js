import React from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import FetchAPI from "./FetchAPI"
import Header from "./Header"
import Navigation from './Navigation';
import About from './About'
import Login from './Login';

function App() {
  return (
    <Router>
    <div  className= "container">
<Header />
<div className="Navcontainer">
<Route path= '/about'  component={About}/>
<Route path='/Login' component={Login}/>
<Navigation />
<div className="fetchbuttons">
<FetchAPI />
</div>
</div>
    </div>
    </Router>
  );
}








// function App () {
//   return (
//     <div className ="App">
//       <h1>Welcome to PoetryClub</h1>
//       < FetchAPI />
      
//     </div>
//     );
// }



export default App


