import TypeBadge from "../type-badge/type-badge";
import { Link } from "react-router-dom";

import './list.scss'


const List = ({todo}) => {
  return (
    <div className="list">
    <TypeBadge className="like">{todo.upvotes}</TypeBadge>
    <div className="list-about">
      <Link to={'/todo/' + todo.id}><h2 className="list-title">{todo.title}</h2></Link>
      <p className="list-subtitle">{todo.description}</p>
      <TypeBadge>{todo.category}</TypeBadge>
    </div>
    <div className="comment">{todo.status}</div>
  </div>
  );
}

export default List;