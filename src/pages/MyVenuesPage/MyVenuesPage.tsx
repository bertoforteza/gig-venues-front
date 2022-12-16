import { useEffect } from "react";
import Button from "../../components/Button/Button";
import VenueCardList from "../../components/VenueCardList/VenueCardList";
import useVenues from "../../hooks/useVenues/useVenues";
import { advancePageActionCreator } from "../../redux/features/uiSlice/uiSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import MyVenuesStyled from "./MyVenuesPageStyled";

const MyVenuesPage = (): JSX.Element => {
  const { userVenues } = useAppSelector(({ venues }) => venues);
  const { currentPage, isNextPage } = useAppSelector(({ ui }) => ui.pages);
  const dispatch = useAppDispatch();
  const { getUserVenues } = useVenues();

  useEffect(() => {
    window.scrollTo(0, 0);
    getUserVenues();
  }, [getUserVenues]);

  const loadMoreVenues = () => {
    getUserVenues(currentPage + 1);
    dispatch(advancePageActionCreator());
  };

  return (
    <MyVenuesStyled>
      <h1 className="my-venues-heading">MY VENUES</h1>
      <VenueCardList venues={userVenues} />
      {isNextPage && <Button text="LOAD MORE" action={loadMoreVenues} />}
    </MyVenuesStyled>
  );
};

export default MyVenuesPage;
