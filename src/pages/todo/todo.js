import Container from "../../components/container/container";
import { Link, useParams } from "react-router-dom";
import List from "../../components/list/list";
import ListComment from "../../components/list-comment/list-comment";
import "./todo.scss"
import { useContext } from "react";
import { TodosContext } from "../../contexts/todos-contexts";
const Todo = () => {
  const {filteredTodos} = useContext(TodosContext);
  const { id } = useParams();

  const insideData = filteredTodos.find((item) => {
    return item.id === +id
  })

  return(
  <Container>
      <div className="todo">
        <div className="todo-header">
          <Link to="/">Go Back</Link>
          <Link to="#!" className="edit-todo">Edit Feedback</Link>
        </div>
        <section className="todo-section">
          <List todo={insideData} />
          <ListComment todo={insideData} />
        </section>
      </div>
    </Container>
  );
}

export default Todo;