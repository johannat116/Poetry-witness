import React, {useState} from 'react'
import Logo from './bee.png'




function FetchAPI() {
const [data, setData] = useState([]);

const apiGet = () => {
  fetch('https://www.poemist.com/api/v1/randompoems')
  .then((response) => response.json())
  .then((json)=> {
      console.log(json);
      setData(json);
  });
};

    return (
    
                    
        <div>
      
            <br />
        

            <div className="poembutton">
          

          
           <button className="beebutton"  onClick={apiGet}><img src={(Logo)} ></img></button>
           <h1 className="beebuttonname">Click to generate a poem</h1>
            </div>
          
        

            <br/>

            
           {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}


          
    <div className= "returnspoem">
    <ul className="returnspoem">
        {data.slice (0,1).map ((item) => (
            <li key={item.id}  className="fetchpoem">
              <div className="title">  {item.title} </div>
               <div className= "Poet">  By {item.poet.name} </div>
                <div className="content"> {item.content} </div>
              
                    
</li>

                    


   ))}
    </ul>





</div>
        </div>
    )
}

export default FetchAPI;
