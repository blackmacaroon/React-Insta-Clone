import React from 'react';
import CommentForm from './CommentForm';

class CommentSection extends React.Component {
      constructor () {
            super();
            this.state = {
                  comments: props.comments,
                  comment: ''
            };
      }


      render() {
            return (
                  <div>
                        <CommentForm 
                        
                        />
                  </div>
            )
      }

}

export default CommentSection;