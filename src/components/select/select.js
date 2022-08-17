import { useRef } from "react";
import { useContext } from "react";
import { TodosContext } from "../../contexts/todos-contexts";
import "./select.scss";

const Select = () => {
  
  const { todos, setFilteredTodos } = useContext(TodosContext);
  const inputRef = useRef();
  const handleSortSubmit = (evt) => {
    evt.preventDefault();
    const inputValue = inputRef.current.value;
    const filteredProducts = todos.map(data => (data)) // sort yangi array qaytarmagani uchun birinchi map qilib oldik.
    .sort((a, b) => {
      switch (inputValue) {
        case "1":
          if (a.upvotes > b.upvotes) {
            return 1;
          } else if (a.upvotes === b.upvotes) {
            return 0;
          }
          return -1;
        case "2":
          return b.upvotes - a.upvotes;
        default:
          break;
      }
      return 0;
    });
    console.log(filteredProducts);
    setFilteredTodos(filteredProducts);
  };

  return (
    <form onSubmit={handleSortSubmit} className="header-nav__select">
      <span className="header-nav__select-about">Sort by: </span>
      <select ref={inputRef} name="" id="header-nav__select">
        <option value="0">Name</option>
        <option value="1">Least Upvotes</option>
        <option value="2">Most Upvotes</option>
      </select>
      <button className="select-filter" type="submit">Sort</button>
    </form>
  );
};

export default Select;
