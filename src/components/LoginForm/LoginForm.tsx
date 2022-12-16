import { useState } from "react";
import { Link } from "react-router-dom";
import { UserCredentials } from "../../data/types";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import RegisterFormStyled from "../RegisterForm/RegisterFormStyled";

const initialFormData: UserCredentials = {
  username: "",
  password: "",
};

const LoginForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialFormData);
  const { loginUser } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const isNotEmpty = formData.username !== "" && formData.password !== "";

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserCredentials = {
      username: formData.username,
      password: formData.password,
    };

    loginUser(formDataToSubmit);
  };

  return (
    <RegisterFormStyled onSubmit={handleSubmit} className="session-form">
      <div className="session-form__container">
        <div className="session-form__form-group">
          <label htmlFor="username" className="session-form__label">
            USERNAME
          </label>
          <input
            className="session-form__input"
            type="text"
            id="username"
            onChange={handleFormChange}
            autoComplete="off"
            value={formData.username}
          />
        </div>
        <div className="session-form__form-group">
          <label htmlFor="password" className="session-form__label">
            PASSWORD
          </label>
          <input
            className="session-form__input"
            type="password"
            id="password"
            onChange={handleFormChange}
            autoComplete="off"
            minLength={8}
            value={formData.password}
          />
        </div>
      </div>
      <Button text="LOGIN" action={() => {}} isDisabled={!isNotEmpty} />
      <div className="session-form__navigation">
        <span>Don't have an account?</span>
        <Link to={"/register"}>REGISTER</Link>
      </div>
    </RegisterFormStyled>
  );
};

export default LoginForm;
