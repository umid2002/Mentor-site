import Container from "../../components/container/container";
import HomeHeader from "../../components/home-header/home-header";
import HomeMentor from "../../components/home-mentor/home-mentor";
import HomeRoadmap from "../../components/home-roadmap/home-roadmap";
import TypeFilter from "../../components/type-filter/type-filter"
import Product from "../../components/product/product";


import "./home.scss"



const Home = () => {
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
          <Product />
        </div>
      </Container>

    </main>
  );
}

export default Home;