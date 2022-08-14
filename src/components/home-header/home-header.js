import "./home-header.scss"
import bulbImg from "../../assets/img/bulb.png"
import Select from "../select/select";
import MainBtn from "../main-button/main-button";
import { Link } from "react-router-dom";


const HomeHeader = () => {
  return (
    <header>
      <nav className="header-nav">
        <img src={bulbImg} alt="Logo Img" />
        <h2 className="header-nav__title"><span className="header-nav__count">6</span>Suggestions</h2>
        <Select />
        <MainBtn className="wolf"><Link className="add-todo" to="/add-todo">+ Add FeedBack</Link></MainBtn>
      </nav>
    </header>
  );
}

export default HomeHeader;