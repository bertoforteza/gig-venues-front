import { useState } from "react";
import { Link } from "react-router-dom";
import { UserRegisterData } from "../../data/types";
import useUser from "../../hooks/useUser/useUser";
import Button from "../Button/Button";
import RegisterFormStyled from "./RegisterFormStyled";

const initialFormData: UserRegisterData = {
  username: "",
  email: "",
  password: "",
};

const RegisterForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialFormData);
  const { registerUser } = useUser();

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const isNotEmpty =
    formData.username !== "" &&
    formData.email !== "" &&
    formData.password !== "";

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: UserRegisterData = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
    };

    registerUser(formDataToSubmit);
  };

  return (
    <RegisterFormStyled className="session-form" onSubmit={handleSubmit}>
      <div className="session-form__container">
        <div className="session-form__form-group">
          <label htmlFor="username" className="session-form__label">
            USERNAME
          </label>
          <input
            className="session-form__input"
            type="text"
            id="username"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.username}
          />
        </div>
        <div className="session-form__form-group">
          <label htmlFor="email" className="session-form__label">
            EMAIL
          </label>
          <input
            className="session-form__input"
            type="text"
            id="email"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.email}
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
            autoComplete="off"
            minLength={8}
            onChange={handleFormChange}
            value={formData.password}
          />
        </div>
      </div>
      <Button text="REGISTER" action={() => {}} isDisabled={!isNotEmpty} />
      <div className="session-form__navigation">
        <span>Already have an account?</span>
        <Link to={"/login"}>LOGIN</Link>
      </div>
    </RegisterFormStyled>
  );
};

export default RegisterForm;
