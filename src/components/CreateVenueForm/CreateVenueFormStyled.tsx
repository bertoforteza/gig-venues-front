import styled from "styled-components";

const CreateVenueFormStyled = styled.form`
  display: flex;
  flex-direction: column;

  .create-form {
    &__container {
      display: flex;
      flex-direction: column;
    }

    &__form-group {
      display: flex;
      flex-direction: column;
      color: ${(props) => props.theme.colors.primary.base};
      font-size: 0.875rem;
      font-weight: ${(props) => props.theme.fontWeights.regular};
      padding: 0.5rem 0;
    }

    &__input {
      background-color: ${(props) => props.theme.colors.ink.light};
      color: ${(props) => props.theme.colors.ink.dark};
      font-weight: ${(props) => props.theme.fontWeights.regular};
      border: 2px solid transparent;
      border-radius: ${(props) => props.theme.borderRadius.big};
      padding: 0.5rem 1rem;
      max-width: 600px;

      &:focus {
        border: 2px solid ${(props) => props.theme.colors.primary.base};
      }
    }

    &__label {
      margin-left: 17px;
    }
  }

  button {
    margin-top: 2rem;
    margin-bottom: 2.5rem;
    max-width: 600px;
  }

  h1 {
    padding-bottom: 1rem;
  }
`;

export default CreateVenueFormStyled;
