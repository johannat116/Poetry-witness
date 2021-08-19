import React from 'react'

function FetchAPI() {

const apiGet = () => {
  fetch('https://www.poemist.com/api/v1/randompoems')
  .then((response) => response.json())
  .then((json)=> console.log(json))
};

    return (
        <div>
            Welcome to Poetry club <br />

            <button onClick={apiGet}> Random Poem</button>
        </div>
    )
}

export default FetchAPI;
