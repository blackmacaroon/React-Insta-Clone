import React from 'react';
import PropTypes from 'prop-types';

function Obj (props) {
      // console.log('props', props);
      // receiving props.object from PostContainer and returning card div
      return (
            <div className='card'>
                  <img src={props.object.imageUrl} alt='pretty thing'/>
                  <div className='anchors'>
                        <i className="fas fa-heart"></i>
                        <i className="fas fa-comment"></i>
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