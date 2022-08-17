import { useState } from "react";
import { createContext } from "react";
import array from "../components/data/data";

export const TodosContext = createContext();

const TodosProvider = (props) => {
  const typeFilter = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "UX"
    },
    {
      id: 3,
      name: "UI"
    },
    {
      id: 4,
      name: "Enhancement"
    },
    {
      id: 5,
      name: "Bug"
    },
    {
      id: 6,
      name: "Feature"
    }
  ];
  const [typeFilterLinks, setTypeFilterLinks] = useState(typeFilter);
  const [todos, setTodos] = useState(array);
  const [filteredTodos, setFilteredTodos] = useState(array)
  
  return(
    <TodosContext.Provider value={{todos, setTodos, filteredTodos, setFilteredTodos, typeFilterLinks, setTypeFilterLinks}} {...props}>
    </TodosContext.Provider>
  );
}
export default TodosProvider;