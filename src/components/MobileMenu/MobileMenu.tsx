import MobileMenuStyled from "./MobileMenuStyled";
import { ReactComponent as Home } from "../../assets/mobile-menu-home.svg";
import { ReactComponent as Serach } from "../../assets/mobile-menu-search.svg";
import { ReactComponent as User } from "../../assets/mobile-menu-user.svg";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import useUser from "../../hooks/useUser/useUser";

const MobileMenu = (): JSX.Element => {
  const { isLogged } = useAppSelector(({ user }) => user);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };
  const { logoutUser } = useUser();
  const toggleMenuAndLogout = () => {
    toggleUserMenu();
    logoutUser();
  };

  const navigate = useNavigate();

  return (
    <MobileMenuStyled>
      <div className="mobile-menu-conteiner">
        <i className="mobile-menu-search" data-testid="Search button">
          <Serach />
        </i>
        <i
          className="mobile-menu-home"
          onClick={() => navigate("/home")}
          data-testid="Home button"
        >
          <Home />
        </i>
        <i
          className="mobile-menu-user"
          onClick={toggleUserMenu}
          data-testid="User menu button"
        >
          <User />
        </i>
      </div>
      {isUserMenuOpen &&
        (isLogged ? (
          <div className="user-menu">
            <Link to={"/my-venues"} onClick={toggleUserMenu}>
              MY VENUES
            </Link>
            <Link to={"/new-venue"} onClick={toggleUserMenu}>
              NEW VENUE
            </Link>
            <Link to={"/login"} onClick={toggleMenuAndLogout}>
              LOGOUT
            </Link>
          </div>
        ) : (
          <div className="user-menu">
            <Link to={"/register"} onClick={toggleUserMenu}>
              REGISTER
            </Link>
            <Link to={"/login"} onClick={toggleUserMenu}>
              LOGIN
            </Link>
          </div>
        ))}
    </MobileMenuStyled>
  );
};

export default MobileMenu;
