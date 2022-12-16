import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <h1 className="login-heading">LOGIN</h1>
      <LoginForm />
    </LoginPageStyled>
  );
};

export default LoginPage;
