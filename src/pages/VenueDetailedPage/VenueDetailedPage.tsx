import { ReactComponent as Location } from "../../assets/card-location-icon.svg";
import { ReactComponent as Capacity } from "../../assets/card-capacity-icon.svg";
import { ReactComponent as Phone } from "../../assets/card-phone-icon.svg";
import { ReactComponent as Email } from "../../assets/card-email-icon.svg";
import { ReactComponent as Indoor } from "../../assets/card-indoor-icon.svg";
import VenueDetailedPageStyled from "./VenueDetailedPageStyled";
import { useParams } from "react-router-dom";
import useVenues from "../../hooks/useVenues/useVenues";
import { useEffect } from "react";
import { useAppSelector } from "../../redux/hooks";
import { venuesInitialState } from "../../redux/features/venuesSlice/venuesSlice";

const VenueDetailedPage = (): JSX.Element => {
  window.scrollTo(0, 0);
  const { venueId } = useParams();
  const { getVenueById } = useVenues();
  const { venues } = useAppSelector(({ venues }) => venues);
  const venue = venues[0] || venuesInitialState;
  const {
    address,
    backupPicture,
    capacity,
    city,
    description,
    email,
    indoor,
    name,
    phoneNumber,
  } = venue;

  useEffect(() => {
    getVenueById(venueId!);
  }, [getVenueById, venueId]);

  return (
    <VenueDetailedPageStyled className="venue-detailed">
      <img src={backupPicture} alt={name} className="venue-detailed__picture" />
      <div className="venue-detailed__info">
        <h1 className="venue-detailed__title">{name}</h1>
        <div className="venue-detailed__group">
          <i className="venue-detailed__icon-location">
            <Location />
          </i>
          <span className="venue-detailed__location">{city}</span>
        </div>
        <div className="venue-detailed__group">
          <span className="venue-detailed__address">{address}</span>
        </div>
        <div className="venue-detailed__group">
          <i className="venue-detailed__icon-capacity">
            <Capacity />
          </i>
          <span className="venue-detailed__capacity">{capacity}</span>
        </div>
        <div className="venue-detailed__group">
          <i className="venue-detailed__icon-indoor">
            <Indoor />
          </i>
          <span className="venue-detailed__indoor">
            {indoor ? "Indoor" : "Outdoor"}
          </span>
        </div>
        <div className="venue-detailed__group">
          <i className="venue-detailed__icon-phone">
            <Phone />
          </i>
          <span className="venue-detailed__phone">{phoneNumber}</span>
        </div>
        <div className="venue-detailed__group">
          <i className="venue-detailed__icon-email">
            <Email />
          </i>
          <span className="venue-detailed__email">{email}</span>
        </div>
      </div>
      <h2 className="venue-detailed__description-heading">DESCRIPTION</h2>
      <p className="venue-detailed__description-content">{description}</p>
    </VenueDetailedPageStyled>
  );
};

export default VenueDetailedPage;
