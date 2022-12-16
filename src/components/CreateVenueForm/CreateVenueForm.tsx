import { useState } from "react";
import useVenues from "../../hooks/useVenues/useVenues";
import Button from "../Button/Button";
import CreateVenueFormStyled from "./CreateVenueFormStyled";

export interface VenueFormData {
  address: string;
  capacity: number;
  city: string;
  email: string;
  indoor: boolean;
  name: string;
  phoneNumber: string;
  picture: File;
  description: string;
}

const initialVenueFormData = {
  address: "",
  capacity: 0,
  city: "",
  email: "",
  indoor: "true",
  name: "",
  phoneNumber: "",
  picture: {} as File,
  description: "",
};

const CreateVenueForm = (): JSX.Element => {
  const [formData, setFormData] = useState(initialVenueFormData);
  const { createNewVenue } = useVenues();

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]:
        event.target.id === "picture"
          ? (event.target as HTMLInputElement).files![0]
          : event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: VenueFormData = {
      address: formData.address,
      capacity: formData.capacity,
      city: formData.city,
      email: formData.email,
      indoor: formData.indoor === "true",
      name: formData.name,
      phoneNumber: formData.phoneNumber,
      picture: formData.picture,
      description: formData.description,
    };

    createNewVenue(formDataToSubmit);
  };

  return (
    <CreateVenueFormStyled
      className="create-form"
      onSubmit={handleSubmit}
      data-testid="create-form"
    >
      <h1 className="create-form__heading">CREATE NEW VENUE</h1>
      <div className="create-form__container">
        <div className="create-form__form-group">
          <label htmlFor="name" className="create-form__label">
            NAME
          </label>
          <input
            className="create-form__input"
            type="text"
            id="name"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.name}
          />
        </div>
        <div className="create-form__form-group">
          <label htmlFor="city" className="create-form__label">
            CITY
          </label>
          <input
            className="create-form__input"
            type="text"
            id="city"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.city}
          />
        </div>
        <div className="create-form__form-group">
          <label htmlFor="address" className="create-form__label">
            ADDRESS
          </label>
          <input
            className="create-form__input"
            type="text"
            id="address"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.address}
          />
        </div>
        <div className="create-form__form-group">
          <label htmlFor="capacity" className="create-form__label">
            TOTAL CAPACITY
          </label>
          <input
            className="create-form__input"
            type="number"
            id="capacity"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.capacity}
            min={0}
            max={1000000}
          />
        </div>
        <div className="create-form__form-group">
          <label htmlFor="indoor-outdoor" className="create-form__label">
            INDOOR/OUTDOOR
          </label>
          <select
            className="create-form__input"
            id="indoor-outdoor"
            onChange={handleFormChange}
          >
            <option value="true">Indoor</option>
            <option value="false">Outdoor</option>
          </select>
        </div>
        <div className="create-form__form-group">
          <label htmlFor="phoneNumber" className="create-form__label">
            PHONE NUMBER
          </label>
          <input
            className="create-form__input"
            type="text"
            id="phoneNumber"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.phoneNumber}
          />
        </div>
        <div className="create-form__form-group">
          <label htmlFor="email" className="create-form__label">
            EMAIL
          </label>
          <input
            className="create-form__input"
            type="email"
            id="email"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.email}
          />
        </div>
        <div className="create-form__form-group">
          <label htmlFor="picture" className="create-form__label">
            PICTURE
          </label>
          <input
            className="create-form__input"
            type="file"
            id="picture"
            autoComplete="off"
            onChange={handleFormChange}
          />
        </div>
        <div className="create-form__form-group">
          <label htmlFor="description" className="create-form__label">
            DESCRIPTION
          </label>
          <textarea
            className="create-form__input"
            id="description"
            autoComplete="off"
            onChange={handleFormChange}
            value={formData.description}
            rows={5}
          />
        </div>
      </div>
      <Button text="CREATE" action={() => {}} />
    </CreateVenueFormStyled>
  );
};

export default CreateVenueForm;
