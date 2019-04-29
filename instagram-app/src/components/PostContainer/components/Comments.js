import React from 'react';


function Comments (props) {
      console.log('props', props);

      return (
            <div className='commentObject'>
                  {props.object.comments.map(comment =>
                        <div>
                              <h3>{comment.username}</h3>
                              <p>{comment.text}</p>
                        </div>
                  )}
            </div> 
      )
}
export default Comments