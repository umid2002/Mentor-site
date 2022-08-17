import Container from "../../components/container/container";
import "./not-found.scss"
import notFound from "../../assets/img/not-found.png"
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <Container>
      <div className="not-found">
        <img className="not-found__img" src={notFound} alt="Img" />
        <h2 className="not-found__title">There is no feedback yet.</h2>
        <p className="not-found__subtitle">Got a suggestion? Found a bug that needs to be squashed? We love hearing about new ideas to improve our app.</p>
        <Link className="home-link" to="/">Home</Link>
      </div>
    </Container>
  );
}
export default NotFound;