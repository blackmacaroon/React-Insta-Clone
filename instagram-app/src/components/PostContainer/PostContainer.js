import React from 'react';
import Obj from './Obj'

import './postContainer.css';

function PostContainer (props) {

      return (
            <div className='postObject'>
                  {props.dummyData.map(object =>
                        <Obj
                        key={object.id}
                        object={object} />
                  )}
            </div> 
      )
}
export default PostContainer