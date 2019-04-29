import React from 'react';
import Comment from './Comments';

function Comments (props) {
      // console.log('props', props);

      return (
            <div className='commentObject'>
                  {props.posts.comments.map(comment =>
                        <Comment
                        key={comment.id}
                        comment={comment} />
                  )}
            </div> 
      )
}
export default Comments