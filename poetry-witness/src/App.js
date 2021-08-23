import React from 'react'
import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import FetchAPI from "./FetchAPI"
import Header from "./Header"
import Navigation from './Navigation';
import About from './About'
import Login from './Login';
import Lygia from './Lygia1.png'
import Lygia2 from './Lygia2.png'






function App() {
const [eventData, setEventData] =useState([])
const [loading, setLoading]= useState (false)

useEffect (() => {
  const fetchEvents = async () => {
    setLoading(true)
    const res= await fetch('https://www.poemist.com/api/v1/randompoems')
    const {events}= await res.json()

    setEventData(events)
    setLoading(false)
  }
  fetchEvents()


}, [])



  return (

    <Router>
    <div  className= "container"
    
    style={{
      backgroundImage: `url(${Lygia})` 
     }} >
   

  
   
<div className= "bookmark">
 
</div>

<Header />
<div className="Navcontainer"
 >


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











export default App


