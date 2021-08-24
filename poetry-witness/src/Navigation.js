import React, {useState} from 'react'
import Logo from "./aboutlogo2.png"
import Logo2 from "./directory.png"





const Navigation = () => {
    return (
        <nav className="Navigation-space">
            <div className= 'Navigation' >
            <ul>

           
           <div className="aboutnavstyle">
           <a href="/Login"> <button className="aboutbuttonlogo"><img src={(Logo2)} ></img></button></a>
               
                <a href="/About"> <button className="aboutbuttonlogo"><img src={(Logo)} ></img></button></a>

        
          
                </div>
                <div className= "directorynavstyle">
               
              

                </div>
            </ul>
            </div>
        </nav>
    )
}

export default Navigation

// import Dropdown from 'react-dropdown'
// import React, {useState} from 'react'





// const Navigation = () => {
//     return (
//         <nav className="Navigation-space">
//             <div className= 'Navigation' >

       
// <Dropdown>
//   <Dropdown.Menu>
//     <Dropdown.Item href="#/action-1">About</Dropdown.Item>
//     <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
//     <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
//   </Dropdown.Menu>
// </Dropdown>

//             </div>
//         </nav>
//     )
// }

// export default Navigation
