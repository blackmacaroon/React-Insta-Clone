import React from 'react';

function Obj (props) {
      console.log('props', props);
      return (
            <div className='card'>
                  <img src={props.object.imageURL} alt='pretty picture'/>
                  <div className='foot'>
                        <p>Likes: {props.object.likes}</p>
                        <p>Posted: {props.object.timestamp}</p>
                  </div>
            </div>
      )
}

export default Obj;