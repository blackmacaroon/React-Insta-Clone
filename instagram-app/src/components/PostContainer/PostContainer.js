import React from 'react';
import Obj from './Obj'
import PropTypes from 'prop-types';
import './postContainer.css';
import CommentsSection from './components/CommentsSection';

function PostContainer (props) {
      
      // console.log('props', props);
      // receiving props from app array posts
      console.log('postsContainerProps', props)

      return (
            <div className='postObject'>

                        <div >
                              <Obj
                              mappedPost={props.mappedPost}/>
                              <CommentsSection
                              mappedPost={props.mappedPost}/>
                              
                              {/* // handleChanges={props.handleChanges} 
                              // submitComment={props.submitComment} */}
                              
                        </div>
            </div> 
            
      )
}

PostContainer.propTypes = {
      posts: PropTypes.arrayOf(PropTypes.mappedPost)
}
export default PostContainer;