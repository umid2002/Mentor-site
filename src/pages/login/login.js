import Container from "../../components/container/container";
import "./login.scss"


const Login = () => {
  const handleFormSubmit = (evt) => {
    evt.preventDefault()
  }
  return (
    <Container>
      <form onSubmit={handleFormSubmit} className="login-form">
      <label htmlFor="mail">
        <input className="login-mail" type="mail" placeholder="Email" />
      </label>
      <label htmlFor="password">
        <input className="login-password" type="password" placeholder="Password" />
      </label>
      <button className="login-submit">Submit</button>
    </form>
    </Container>
  );
}
export default Login;