import React from "react";
import PropTypes from "prop-types";
import "./commentSection.css";
import Comment from "./Comment";

class CommentsSection extends React.Component {
  // receiving props.object from PostContainer, changing state to commentList
  constructor(props) {
    super(props);
    this.state = {
      commentList: this.props.mappedPost.comments,
      text: ""
    };
  }

  // any change will change state and rerender with new name:value
  handleChanges = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // hardcoded any new comment submission will prevent default page reload, change state commentList to copy of what it was and add new text from 'kayla'
  addNewComment = event => {
    event.preventDefault();
    this.setState({
      commentList: [
        ...this.state.commentList,
        { username: "kayla", text: this.state.text }
      ],
      //returns the input to an empty string
      text: ""
    });
  };
  // console.log('props', props);

  render() {
//     console.log("props", this.props);
//     console.log("state", this.state);
    return (
      <div className="commentObject">
      {/*render the map of the comments array for each object and pass to Comment*/}
        {this.props.mappedPost.comments.map(comment => (
          <div>
            <Comment
              key={comment.text}
              username={comment.username}
              text={comment.text}
            />
          </div>
        ))}
        {/* renders submit comment form */}
        <form onSubmit={this.addNewComment}>
          <input
            name="text"
            type="text"
            value={this.state.text}
            placeholder="thoughts?... "
            onChange={this.handleChanges}
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}

CommentsSection.propTypes = {
  mappedPost: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string
  })
};
export default CommentsSection;
