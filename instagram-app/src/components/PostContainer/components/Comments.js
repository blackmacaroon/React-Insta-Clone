import React from 'react';

function Comment (props) {
      console.log('props', props);
      return (
            <div className='comment'>
                  <p>{props.comment.username}</p>
                  <p>{props.comment.text}</p>
            </div>
      )
}

export default Comment;