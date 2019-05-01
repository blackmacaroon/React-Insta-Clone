import React from 'react';
import './commentSection.css';

const Comment = props => {
      console.log('commentprops', props)
      return(
            <div>
                  <h3>{props.username}</h3>
                  <p>{props.text}</p>
            </div>
      )
}

export default Comment