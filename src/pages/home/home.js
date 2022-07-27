import Container from "../../components/container/container";
import HomeHeader from "../../components/home-header/home-header";
import HomeMentor from "../../components/home-mentor/home-mentor";
import HomeRoadmap from "../../components/home-roadmap/home-roadmap";
import TypeFilter from "../../components/type-filter/type-filter"
import Count from "../../components/count/count";
import Todos from "../../components/todos/todos";
import AddTodos from "../../components/add-todo/add-todo";
import Product from "../../components/product/product";


import { Link } from "react-router-dom";
import "./home.scss"
import { useState } from "react";


const Home = ({ listTodo, data, setData }) => {


  const [todo, setTodo] = useState([
    {
      name: "umid",
      id: 1
    },
    {
      name: "ali",
      id: 2
    },
    {
      name: "xasan",
      id: 3
    },
  ])



  return (
    <main className="home">
      <Container className="home__container">
        <div className="home__left">
          <HomeMentor />
          <TypeFilter />
          <HomeRoadmap />
        </div>
        <div className="home-right">
          <HomeHeader />
          <Product key={data.id} listTodo={listTodo} data={data} setData={setData} />
        </div>
      </Container>
      <Count />

    {/* Todo */}
    <Todos todo={todo}  />
    <AddTodos todo={todo} setTodo={setTodo} />
    <Link to='/add-todo'>Misol</Link>

    </main>
  );
}

export default Home;