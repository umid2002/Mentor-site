import Home from './pages/home/home'
import AddTodo from './pages/add-todo/add-todo';
import Todo from './pages/todo/todo';
import array from './components/data/data';


import "./assets/scss/main.scss"
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';






const App = () => {

  const [ data, setData ] = useState(array);

  return (
    <>
    <Routes>
      <Route path='/' element={<Home data={data} setData={setData} />}/>
      <Route path='/add-todo' element={<AddTodo />} />
      <Route path='/todo/:id' element={ <Todo data={data} /> } />
    </Routes>
    </>
  );
}

export default App;
