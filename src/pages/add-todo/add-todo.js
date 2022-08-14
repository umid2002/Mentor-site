import { Link } from "react-router-dom";
import Container from "../../components/container/container";
import { AiOutlineLeft } from "react-icons/ai";
import "./add-todo.scss";
import { useRef } from "react";
import { useContext } from "react";
import { TodosContext } from "../../contexts/todos-contexts";

const AddTodo = () => {
  const {filteredTodos, setFilteredTodos} = useContext(TodosContext);
  const titleInput = useRef();
  const categoryInput = useRef();
  const subtitleInput = useRef();
  const handleFormSubmit = (evt) => {
    evt.preventDefault()
    const titleValue = titleInput.current.value;
    const categortValue = categoryInput.current.value;
    const subtitleValue = subtitleInput.current.value;
     const newTodo = {
      id: Math.floor(Math.random() * 1000),
      title: titleValue,
      category: categortValue,
      upvotes: Math.floor(Math.random() * 100),
      status: "suggestion",
      description: subtitleValue
     }
     setFilteredTodos(newTodo, ...filteredTodos)
     
  }
  return (
    <section className="add-todo">
      <Container>
        <div className="add-modal">
          <Link className="link-home" to="/">
            {" "}
            <AiOutlineLeft /> Go Back
          </Link>
          <div className="add-todo__modal">
            <h2 className="modal-title">Create New FeedBack</h2>
            <form onSubmit={handleFormSubmit} className="feedback-modal" action="#!">
              <label className="feedback-label" htmlFor="#!">
                <span className="feedback-title">Feedback Title</span>
                <span className="feedback-subtitle">
                  Add a short, descriptive headline
                </span>
                <input ref={titleInput} className="feedback-title__input" type="text" />
              </label>
              <label className="feedback-label" htmlFor="#!">
                <span className="feedback-title">Category</span>
                <span className="feedback-subtitle">
                  Choose a category for your feedback
                </span>
                <select ref={categoryInput} className="feedback-title__input" type="text">
                  <option value="Feature">Feature</option>
                  <option value="UX">UX</option>
                  <option value="UI">UI</option>
                  <option value="Enhancement">Enhancement</option>
                  <option value="Bug">Bug</option>
                </select>
              </label>
              <label className="feedback-label" htmlFor="#!">
                <span className="feedback-title">Feedback Detail</span>
                <span className="feedback-subtitle">
                  Include any specific comments on what should be improved,
                  added, etc.
                </span>
                <textarea ref={subtitleInput} className="feedback-title__input" type="text" />
              </label>
            <div className="feedback-buttons">
              <Link to="/" className="add-cancel">Cancel</Link>
              <button type="submit" className="add-feedback">Add Feedback</button>
            </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
export default AddTodo;
