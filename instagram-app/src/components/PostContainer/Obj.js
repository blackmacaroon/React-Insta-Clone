import React from 'react';

function Obj (props) {
      return (
            <div className='card'>
                  <img src={props.object.imageURL} alt='pretty instagram image'/>
                  <p>{props.object.likes} {props.object.timestamp}</p>
            </div>
      )
}

export default Obj;