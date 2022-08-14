import TypeBadge from "../type-badge/type-badge";
import { useContext } from "react";
import { TodosContext } from "../../contexts/todos-contexts";


import "./type-filter.scss"



const TypeFilter = () => {

  const {typeFilterLinks} = useContext(TodosContext);
  return (
    <form className="type-filter">
      {typeFilterLinks.map((type) => (<TypeBadge key={type.id} type={type.name} />) )}
    </form>
  );
}

export default TypeFilter;
