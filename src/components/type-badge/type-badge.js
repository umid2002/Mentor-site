import { useContext } from "react";
import { TodosContext } from "../../contexts/todos-contexts";
import "./type-badge.scss"

const TypeBadge = ({type, children, className = ""}) => {
  const {todos, setFilteredTodos} = useContext(TodosContext);
  const handleFilterClick = (evt) => {
    const value = evt.target.id;
    const filterByType = todos.filter((todo) => todo.category === value);
    value === "All" ? setFilteredTodos(todos) : setFilteredTodos(filterByType);
  }

  return (
    <>
      <label className="type-badge"  name="filter">
        <span className='type-filter__name'>{type}</span>
        <span className={className}>{children}</span>
        <input onChange={handleFilterClick} id={type} className="visually-hidden" name='filter' type="radio" />
      </label>
    </>
  );
}

export default TypeBadge;