import React from 'react';

const CommentForm = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        value={props.comment}
        placeholder="thoughts?... "
        onChange={props.changeComment}
      />
    </form>
  );
};

export default CommentForm;