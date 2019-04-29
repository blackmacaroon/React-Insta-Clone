import React from 'react';
import Obj from './Obj'

import './postContainer.css';

function PostContainer (props) {
      console.log('props', props);

      return (
            <div className='postObject'>
                  {props.posts.map(object =>
                        <Obj
                        key={object.id}
                        object={object} />
                  )}
            </div> 
      )
}
export default PostContainer