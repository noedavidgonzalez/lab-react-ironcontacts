import React from 'react';

const DetalleLista = (props) => {
  return (
    <div className="layout">

      <div>
        <img src={props.picture} width="100" alt=""/>
      </div>
      <div>
        
      </div>
      <div>
        <span>{props.name}</span>
      </div>
      <div>
        <span>{props.popularity}</span>
      </div>  
      <div>
        <button onClick={props.clickToDelete}>Delete</button>
      </div>  

    </div>
  )
}

export default DetalleLista;