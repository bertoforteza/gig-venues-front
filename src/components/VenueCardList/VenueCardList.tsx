import { Venue } from "../../redux/features/types";
import VenueCard from "../VenueCard/VenueCard";
import VenueCardListStyled from "./VenueCardListStyled";

interface VenueCardListProps {
  venues: Venue[];
}

const VenueCardList = ({ venues }: VenueCardListProps): JSX.Element => {
  return (
    <VenueCardListStyled>
      {venues.map((venue, index) => (
        <VenueCard
          capacity={venue.capacity}
          city={venue.city}
          name={venue.name}
          backupPicture={venue.backupPicture}
          id={venue.id}
          key={index}
        />
      ))}
    </VenueCardListStyled>
  );
};

export default VenueCardList;
