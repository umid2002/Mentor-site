import { useRef, useState } from "react";


const Count = () => {
  // useState
  const [ count, setCount ] = useState(0)
  const handleBtnClick = () =>{
    setCount(count + 1);
  }

  // useRef
  const inputRef = useRef()
  const handleAddFormSubmit = (evt) => {
    evt.preventDefault()

    setCount(count + +inputRef.current.value)

  }


  return (
   <>
    <form onSubmit={handleAddFormSubmit} action="#">
      <input ref={inputRef} type="number" />
      <button>Add Number</button>
    </form>

     <p>Count: {count}</p>
    <button onClick={handleBtnClick}>Click</button>
   </>
  );
}

export default Count;