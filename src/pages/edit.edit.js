import { useState } from "react";
import { useContext } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link, useNavigate, useParams } from "react-router-dom";
import Container from "../components/container/container";
import { TodosContext } from "../contexts/todos-contexts";


const Edit = () => {
  const {todos, setTodos, setFilteredTodos} = useContext(TodosContext);
  const {id} = useParams();
  const navigate = useNavigate()

  const currentTodo = todos.find(todo => todo.id === +id);
  const currentIndexTodo = todos.findIndex((item) => item.id === +id);
  const [ titleValue, setTitleValue ] = useState(currentTodo?.title)
  const [ categoryValue, setCategoryValue ] = useState(currentTodo?.category)
  const [ descriptionValue, setDescriptionValue ] = useState(currentTodo?.description)

  const handleTitleEdit = (evt) => {
    setTitleValue(evt.target.value)
  }
  const handleCategoryEdit = (evt) => {
    setCategoryValue(evt.target.value)
  }
  const handleSubtitleEdit = (evt) => {
    setDescriptionValue(evt.target.value)
  }

  const handleFormEdit = (evt) => {
    evt.preventDefault();
    const prevTodo = todos.slice(0, currentIndexTodo);
    const nextTodo = todos.slice(currentIndexTodo + 1);
    const newTodo = {
      id: currentTodo.id,
      title: titleValue,
      category: categoryValue,
      upvotes: currentTodo.upvotes,
      status: "suggestion",
      description: descriptionValue,
      comments: currentTodo.comments
    }
    setTodos([...prevTodo, newTodo, ...nextTodo])
    setFilteredTodos([...prevTodo, newTodo, ...nextTodo])
    navigate("/")
  }
  
  return (
    <>
      <section className="add-todo">
      <Container>
        <div className="add-modal">
          <Link className="link-home" to={"/todo/" + id}>
            {" "}
            <AiOutlineLeft /> Go Back
          </Link>
          <div className="add-todo__modal">
            <h2 className="modal-title">Editing ‘Add a dark theme option’</h2>
            <form onSubmit={handleFormEdit} className="feedback-modal" action="#!">
              <label className="feedback-label" htmlFor="#!">
                <span className="feedback-title">Feedback Title</span>
                <span className="feedback-subtitle">
                  Add a short, descriptive headline
                </span>
                <input value={titleValue} onChange={handleTitleEdit} className="feedback-title__input" type="text" />
              </label>
              <label className="feedback-label" htmlFor="#!">
                <span className="feedback-title">Category</span>
                <span className="feedback-subtitle">
                  Choose a category for your feedback
                </span>
                <select value={categoryValue} onChange={handleCategoryEdit} className="feedback-title__input" type="text">
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
                <textarea value={descriptionValue} onChange={handleSubtitleEdit} className="feedback-title__input" type="text" />
              </label>
            <div className="feedback-buttons">
              <Link to={"/todo/" + id} className="add-cancel">Cancel</Link>
              <button type="submit" className="add-feedback">Edit Feedback</button>
            </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
    </>
  );
}
export default Edit;