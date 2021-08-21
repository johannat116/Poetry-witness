import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Buttons from './Buttons'


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

            <div className="poembuton">
            <button onClick={apiGet} > Random Poem
            </button>
            </div>

            <br/>

            <Buttons/>
           {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}

    <div className= "returnspoem">
    <ul className="returnspoem">
        {data.slice (0,1).map ((item) => (
            <li key={item.id}  className="fetchpoem">
                Name: {item.title}  | Poet: {item.poet.name} | {item.content}
            
</li>
   ))}
    </ul>
<button color= "red "></button>
















</div>
        </div>
    )
}

export default FetchAPI;
