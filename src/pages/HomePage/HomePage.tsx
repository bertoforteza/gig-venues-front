import { useEffect } from "react";
import Button from "../../components/Button/Button";
import Filter from "../../components/Filter/Filter";
import VenueCardList from "../../components/VenueCardList/VenueCardList";
import useVenues from "../../hooks/useVenues/useVenues";
import { advancePageActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import HomePageStyled from "./HomePageStyled";

const HomePage = (): JSX.Element => {
  const { venues } = useAppSelector(({ venues }) => venues);
  const { currentPage, isNextPage } = useAppSelector(({ ui }) => ui.pages);
  const dispatch = useAppDispatch();
  const { getVenues } = useVenues();

  useEffect(() => {
    window.scrollTo(0, 0);
    getVenues();
  }, [getVenues]);

  const loadMoreVenues = () => {
    getVenues(currentPage + 1);
    dispatch(advancePageActionCreator());
  };

  return (
    <HomePageStyled>
      <h1 className="home-heading">HOME</h1>
      <Filter />
      <VenueCardList venues={venues} />
      {isNextPage && <Button text="LOAD MORE" action={loadMoreVenues} />}
    </HomePageStyled>
  );
};

export default HomePage;
