import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import NotFoundPageStyled from "./NotFoundPageStyled";

const NotFoundPage = (): JSX.Element => {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };

  return (
    <NotFoundPageStyled>
      <div className="not-found-container">
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_29_267)">
            <path
              d="M35.6829 16.9553C35.6054 16.7482 35.4667 16.5698 35.2851 16.4437C35.1035 16.3177 34.8877 16.2501 34.6667 16.25H21.5855L29.1309 1.5795C29.2163 1.41431 29.2578 1.22989 29.2512 1.04402C29.2446 0.858155 29.1903 0.677117 29.0934 0.518372C28.9965 0.359627 28.8603 0.228533 28.698 0.137736C28.5357 0.0469389 28.3527 -0.000497116 28.1667 3.92839e-06C27.907 0.000111714 27.6559 0.0935365 27.4593 0.263254L19.5 7.137L3.62596 20.8466C3.45866 20.991 3.33954 21.1831 3.28455 21.3971C3.22957 21.6112 3.24136 21.8369 3.31835 22.0441C3.39534 22.2512 3.53384 22.4299 3.71527 22.5561C3.8967 22.6822 4.11238 22.7499 4.33337 22.75H17.4146L9.8692 37.4205C9.78375 37.5857 9.74231 37.7701 9.74888 37.956C9.75545 38.1419 9.80981 38.3229 9.90671 38.4816C10.0036 38.6404 10.1398 38.7715 10.3021 38.8623C10.4644 38.9531 10.6474 39.0005 10.8334 39C11.0931 38.9999 11.3442 38.9065 11.5408 38.7368L19.5 31.863L35.3741 18.1534C35.5417 18.0091 35.6612 17.8169 35.7164 17.6028C35.7716 17.3886 35.7599 17.1626 35.6829 16.9553Z"
              fill="#2FDBBC"
            />
          </g>
          <defs>
            <clipPath id="clip0_29_267">
              <rect width="39" height="39" fill="white" />
            </clipPath>
          </defs>
        </svg>
        <span className="not-found-code">404</span>
        <span className="not-found-text">NOT FOUND</span>
      </div>
      <Button text="HOME" action={navigateHome} />
    </NotFoundPageStyled>
  );
};

export default NotFoundPage;
