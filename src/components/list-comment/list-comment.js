const ListComment = ({ todo }) => {
  const { comments } = todo;

  return (
    <div className="comments">
      {comments.map((comment) => (
        <>
          <div className="comment-header">
          <p className="comments-count">4</p>
          <div className="user-about">
            <img src="" alt="IMG" />
            <h2 className="user-name">{comment.user.name}</h2>
            <p className="user-mail">{comment.user.username}</p>
          </div>
          <p className="reply">Reply</p>
        </div>
        <div className="comment-bottom">
          <p className="user-comment">{comment.content}</p>
        </div>
        </>
      ))}
    </div>
  );
};

export default ListComment;
