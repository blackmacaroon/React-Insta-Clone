import React from 'react';
import Obj from './Obj'
import PropTypes from 'prop-types';
import './postContainer.css';
import CommentsSection from './components/CommentsSection';

function PostContainer (props) {
      
      // console.log('props', props);
      // receiving props from app array posts


      return (
            <div className='postObject'>
                  {/* mapping thorough the array posts to create separate objects, passing the objects to Obj and CommentsSection */}
                  {props.posts.map(object =>
                        <div >
                              <Obj
                              key={object.timestamp}
                              object={object} />
                              <CommentsSection
                              key={object.timestamp}
                              object={object} />
                              
                              {/* // handleChanges={props.handleChanges} 
                              // submitComment={props.submitComment} */}
                              
                        </div>
                        
                  )}
                  
            </div> 
            
      )
}

PostContainer.propTypes = {
      posts: PropTypes.arrayOf(PropTypes.object)
}
export default PostContainer;