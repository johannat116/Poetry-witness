import React, {useState} from 'react'

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

            <button onClick={apiGet} style= {{
                font:'inherit',
                cursor:'pointer',
                border: '1px solid blue',
                background: 'blue',
                color: 'white',
                

            }}> Random Poem
            
            
            </button>
            <br/>
           {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
<div>
    <ul >
        {data.slice (0,1).map ((item) => (
            <li key={item.id} >
                Name: {item.title}  | Poet: {item.poet.name} | {item.content}
            
</li>

                        
          
        ))}
    </ul>


  
  


  
</div>
        </div>
    )
}

export default FetchAPI;
