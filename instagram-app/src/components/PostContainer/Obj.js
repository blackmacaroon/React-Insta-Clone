import React from 'react';
import PropTypes from 'prop-types';

function Obj (props) {
      // console.log('props', props);
      return (
            <div className='card'>
                  <img src={props.object.imageUrl} alt='pretty picture'/>
                  <div className='anchors'>
                        <a href='#'><i class="fas fa-heart"></i></a>
                        <a href='#'><i class="fas fa-comment"></i></a>
                  </div>
                  <p>{props.object.likes} likes</p>
            </div>
      )
}

Obj.propTypes ={
      object: PropTypes.shape ({
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number
      })
}

export default Obj;