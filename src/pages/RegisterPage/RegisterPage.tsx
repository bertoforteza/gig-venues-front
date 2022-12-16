import RegisterForm from "../../components/RegisterForm/RegisterForm";
import RegisterPageStyled from "./RegisterPageStyled";

const RegisterPage = (): JSX.Element => {
  return (
    <RegisterPageStyled>
      <h1 className="register-heading">REGISTER</h1>
      <RegisterForm />
    </RegisterPageStyled>
  );
};

export default RegisterPage;
