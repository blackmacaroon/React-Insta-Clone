import React from 'react';
import PropTypes from 'prop-types';

class Obj extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  likes: props.object.likes
            };
      }
      // console.log('props', props);
      // receiving props.object from PostContainer and returning card div

     
      incrementLike = () => {
            let likes = this.state.likes + 1;
            this.setState({ likes });
          };

      render() {
            return (
                  <div className='card'>
                        <img src={this.props.object.imageUrl} alt='pretty thing'/>
                        <div className='anchors'>
                              <i className="fas fa-heart" onClick={this.incrementLike}></i>
                              <i className="fas fa-comment"></i>
                        </div>
                        <p>{this.props.object.likes} likes</p>
                  </div>
            )
      }
}

Obj.propTypes ={
      object: PropTypes.shape ({
            imageUrl: PropTypes.string.isRequired,
            likes: PropTypes.number
      })
}

export default Obj;