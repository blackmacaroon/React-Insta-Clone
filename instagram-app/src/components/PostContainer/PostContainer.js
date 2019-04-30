import React from 'react';
import Obj from './Obj'
import PropTypes from 'prop-types';

import './postContainer.css';
import Comments from './components/Comments';

function PostContainer (props) {
      
      console.log('props', props);


      return (
            <div className='postObject'>
                  {props.posts.map(object =>
                        <div key={object.id}>
                              <Obj
                              object={object} />
                              <Comments
                              handleChanges={props.handleChanges} 
                              submitComment={props.submitComment}
                              object={object} />
                        </div>
                        
                  )}
                  
            </div> 
            
      )
}

PostContainer.propTypes = {
      posts: PropTypes.arrayOf(PropTypes.object)
}
export default PostContainer;