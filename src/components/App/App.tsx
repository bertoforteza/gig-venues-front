import Layout from "../Layout/Layout";
import Loading from "../Loading/Loading";
import Modal from "../Modal/Modal";
import { useAppSelector } from "../../redux/hooks";
import Header from "../Header/Header";
import MobileMenu from "../MobileMenu/MobileMenu";
import useToken from "../../hooks/useToken/useToken";
import { useEffect } from "react";

const App = () => {
  const {
    isLoading,
    modal: { isOpen, modalText, isError },
  } = useAppSelector(({ ui }) => ui);
  const { getToken } = useToken();

  useEffect(() => {
    getToken();
  }, [getToken]);

  return (
    <div className="app">
      {isLoading && <Loading />}
      {isOpen && <Modal modalText={modalText} isError={isError} />}
      <Header />
      <Layout />
      <MobileMenu />
    </div>
  );
};

export default App;
