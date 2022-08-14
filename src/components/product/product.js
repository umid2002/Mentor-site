import { useContext } from "react";
import { TodosContext } from "../../contexts/todos-contexts";
import List from "../list/list";

import "./product.scss";

const Product = () => {
  const {filteredTodos} = useContext(TodosContext);
  return (
    <div className="list-wrapper">
      {filteredTodos?.map((todo) => (
          <List key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default Product;
