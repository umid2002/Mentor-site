import "./list-comment.scss";
import lady from "../../assets/img/user-lady.png"
const ListComment = ({ todo }) => {
  const { comments } = todo;
  console.log(comments[0].user.image);
  return (
    <div className="comments">
      <p className="comments-count">{comments ? comments.length + " Comments" : null}</p>
      {comments?.map((comment) => (
        <div className="comments-content" key={comment.id}>
          <div className="comment-header">
            {comment.user.image ? <img src={lady} alt="IMG" /> : null}
            <div className="user-about">
              <h2 className="user-name">{comment.user.name}</h2>
              <p className="user-mail">{comment.user.username}</p>
            </div>
            <p className="reply">Reply</p>
          </div>
          <div className="comment-bottom">
            <p className="user-comment">{comment.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListComment;
