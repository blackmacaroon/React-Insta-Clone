import React from 'react';
import Comments from './Comments';
import CommentForm from './CommentForm';
import PropTypes from 'prop-types';

class CommentSection extends React.Component {
      constructor () {
            super();
            this.state = {
                  comments: this.props.comments,
                  comment: ''
            };
      }

      submitComment = event => {
            event.preventDefault();
            let newComment = {
                  username: 'worcalyak',
                  text: this.state.comment
            };
      }


      render() {
            return (
                  <div>
                        {this.state.comments.map((comment, index) => 
                        <Comments 
                              key={index} 
                              comment={comment} 
                        />)}
                        <CommentForm 
                              // comment={this.state.comment}
                              comments={this.state.comments}
                        />
                  </div>
            )
      }

}

export default CommentSection;