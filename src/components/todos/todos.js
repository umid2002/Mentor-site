

const Todos = ({todo}) => {
  return(
    <ul className="todos">
      {todo.map( e => (
        <li>{e.name}</li>
      ))}
    </ul>
  );
}

export default Todos;