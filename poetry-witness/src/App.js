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
    <div  className= "container"
    style={{
      width:'90%',
      maxWidth: '40rem',
      margin: '2rem auto',
      border: '1px solid #ccc',
      padding: '1rem'
  

    }}
>
<Header />
<FetchAPI />
<Route path= '/about'  component={About}/>
<Route path='/Login' component={Login}/>
<Navigation />

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


