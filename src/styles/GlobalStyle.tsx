import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
}

body,
html {
  margin: 0;
  font-family: "oswald", sans-serif;
}

body {
  background-color: ${(props) => props.theme.colors.ink.dark};
}

button,
select {
  font: inherit;
}

input, textarea, select {
  font-family: "Poppins";
}

button,
a {
  cursor: pointer;
}

ul {
  list-style: none;
  list-style-position: outside;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
}

h1 {
  color: ${(props) => props.theme.colors.ink.light};
  font-size: 1.5rem;
  font-weight: ${(props) => props.theme.fontWeights.regular};
}

:focus-visible {
    outline: none;
  }
`;

export default GlobalStyle;
