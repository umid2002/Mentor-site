import { useState } from "react";
import { Link } from "react-router-dom";
import { BiArrowToTop } from 'react-icons/bi';
import './list.scss'


const List = ({todo}) => {
  const likeCount = todo.upvotes;
  const [like, setLike] = useState(likeCount);
  const handleLikeAdd = () => {
    return setLike(like + 1)
  }
  return (
    <div className="list">
    <span onClick={handleLikeAdd} className="like">{like}
    <BiArrowToTop />
    </span>
    <div className="list-about">
      <Link to={'/todo/' + todo.id}><h2 className="list-title">{todo.title}</h2></Link>
      <p className="list-subtitle">{todo.description}</p>
      <span className="comment">{todo.category}</span>
    </div>
    <div className="comment">{todo.status}</div>
  </div>
  );
}

export default List;