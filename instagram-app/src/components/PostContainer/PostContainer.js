import React from 'react';
import Obj from './Obj'

import './postContainer.css';
import Comments from './components/Comments';

function PostContainer (props) {
      // console.log('props', props);


      return (
            <div className='postObject'>
                  {props.posts.map(object =>
                        <div key={object.id}>
                              <Obj
                              object={object} />
                              <Comments
                              object={object} />
                        </div>
                        
                  )}
                  
            </div> 
            
      )
}
export default PostContainer;