import VenueCardStyled from "./VenueCardStyled";
import { ReactComponent as Location } from "../../assets/card-location-icon.svg";
import { ReactComponent as Capacity } from "../../assets/card-capacity-icon.svg";
import { ReactComponent as Detail } from "../../assets/card-detail-icon.svg";
import { ReactComponent as Delete } from "../../assets/card-delete-icon.svg";
import useVenues from "../../hooks/useVenues/useVenues";
import { useLocation, useNavigate } from "react-router-dom";

interface VenueCardProps {
  name: string;
  city: string;
  capacity: number;
  id: string;
  backupPicture: string;
}

const VenueCard = ({
  name,
  city,
  capacity,
  id,
  backupPicture,
}: VenueCardProps): JSX.Element => {
  const { deleteVenue } = useVenues();
  const { pathname } = useLocation();
  const isInMyVenues = pathname === "/my-venues";
  const handleDelete = () => {
    deleteVenue(id);
  };
  const navigate = useNavigate();

  return (
    <VenueCardStyled>
      <img src={backupPicture} alt="" className="venue-card__picture" />
      <div className="venue-card__info">
        <h2 className="venue-card__title">{name}</h2>
        <i className="venue-card__icon-location">
          <Location />
        </i>
        <span className="venue-card__location">{city}</span>
        <i className="venue-card__icon-capacity">
          <Capacity />
        </i>
        <span className="venue-card__capacity">{capacity}</span>
        <i
          className="venue-card__icon-detail"
          onClick={() => navigate(`/venues/${id}`)}
          data-testid="Detail menu button"
        >
          <Detail />
        </i>
        {isInMyVenues && (
          <i
            className="venue-card__icon-delete"
            onClick={handleDelete}
            data-testid="Delete button"
          >
            <Delete />
          </i>
        )}
      </div>
    </VenueCardStyled>
  );
};

export default VenueCard;
