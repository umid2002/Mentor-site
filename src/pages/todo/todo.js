import Container from "../../components/container/container";
import { Link, useParams } from "react-router-dom";
import MainBtn from "../../components/main-button/main-button";
import List from "../../components/list/list";
import ListComment from "../../components/list-comment/list-comment";

const Todo = ( { data } ) => {
  const { id } = useParams();

  const insideData = data.find((item) => {
    return item.id === +id
  })
  console.log(insideData);

  return(
  <Container>
      <div className="todo">
        <div className="todo-header">
          <Link to="/">Go Back</Link>
          <MainBtn className="edit-todo">Edit Feedback</MainBtn>
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