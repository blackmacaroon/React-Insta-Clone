import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
            commentList: this.props.comments,
            text: ''

      }
  }


  render() {
            return (
                  <form onSubmit={props.submitComment}>
                        <input
                        name="text"
                        type="text"
                        value={this.state.text}
                        placeholder="thoughts?... "
                        onChange={props.handleChanges}
                        autoComplete="off"
                        />
                  </form>
      );
      }
};

export default CommentForm;