import List from "../list/list";

import "./product.scss";

const Product = ({ listTodo, data, setData }) => {
  return (
    <div className="list-wrapper">
      {data.map((todo) => (
        <>
          <List key={todo.id} todo={todo} />
        </>
      ))}
    </div>
  );
};

export default Product;
