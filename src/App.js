import Home from './pages/home/home'
import Todo from './pages/todo/todo';
import array from './components/data/data';


import "./assets/scss/main.scss"
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/login/login';
import NotFound from './pages/not-found/not-found';
import TodosProvider from './contexts/todos-contexts';
import AddTodo from './pages/add-todo/add-todo';
import Edit from './pages/edit.edit';






const App = () => {

  const [ data, setData ] = useState(array);

  return (
    <TodosProvider>
      <Routes>
        <Route path='/' element={<Home data={data} setData={setData} />}/>
        <Route path='/todo/:id' element={ <Todo data={data} /> } />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<NotFound />} />
        <Route path="/add-todo" element={<AddTodo />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </TodosProvider>
  );
}

export default App;
