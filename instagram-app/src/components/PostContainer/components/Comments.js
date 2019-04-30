import React from 'react';
import PropTypes from 'prop-types';


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

Comments.propTypes = {
       object: PropTypes.shape({
             username: PropTypes.string.isRequired,
             text: PropTypes.string
       })
}
export default Comments