import React from 'react';
import './postContainer.css';

const PostContainer = (props) => {
      return (
            <div className='container'>
                  <div className='post'>
                        <img src='' />
                        <h1>Post 1</h1>
                        <p> stuff and things</p>
                  </div>
                  <div className='post'>
                        <img src='' />
                        <h1>Post 2</h1>
                        <p> stuff and things</p>
                  </div>
                  <div className='post'>
                        <img src='' />
                        <h1>Post 3</h1>
                        <p> stuff and things</p>
                  </div>
                  <div className='post'>
                        <img src='' />
                        <h1>Post 4</h1>
                        <p> stuff and things</p>
                  </div>
                  <div className='post'>
                        <img src='' />
                        <h1>Post 5</h1>
                        <p> stuff and things</p>
                  </div>

            </div>
      
      )
}

export default PostContainer