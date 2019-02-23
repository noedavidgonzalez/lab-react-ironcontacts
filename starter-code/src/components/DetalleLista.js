import React from 'react';

const DetalleLista = (props) => {
  return (
    <div className="layout">

      <div>
        <img src={props.picture} width="200"></img>
      </div>
      <div>
        <span>{props.name}</span>
      </div>
      <div>
        <span>{props.popularity}</span>
      </div>  

    </div>
  )
}

export default DetalleLista;