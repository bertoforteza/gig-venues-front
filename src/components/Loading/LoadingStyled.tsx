import styled from "styled-components";

const LoadingStyled = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(45, 45, 45, 0.8);
  z-index: 3;

  .progress {
    height: 4.5px;
    width: 145.6px;
    background: linear-gradient(#2fdbbc 0 0), linear-gradient(#2fdbbc 0 0),
      #a3a3a3;
    background-size: 60% 100%;
    background-repeat: no-repeat;
    animation: progress-7x9cg2 3s infinite;
  }

  @keyframes progress-7x9cg2 {
    0% {
      background-position: -150% 0, -150% 0;
    }

    66% {
      background-position: 250% 0, -150% 0;
    }

    100% {
      background-position: 250% 0, 250% 0;
    }
  }
`;

export default LoadingStyled;
