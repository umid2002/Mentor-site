import { useRef } from "react";

const AddTodos = ({ todo, setTodo }) => {

  const inputValue = useRef()

  const handleBtnSubmit = (evt) => {
    evt.preventDefault()
    const inputText = inputValue.current.value;

    const newTodo = {
      name: inputText,
      id: Math.floor(Math.random() * 100)
    }

    setTodo([newTodo, ...todo])

  }


  return(
    <form onSubmit={handleBtnSubmit} action="#">
      <input ref={inputValue} type="text" />
      <button>Add Todo</button>
    </form>
  );
}

export default AddTodos;