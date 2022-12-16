import CreateVenueForm from "../../components/CreateVenueForm/CreateVenueForm";
import CreateVenuePageStyled from "./CreateVenuePageStyled";

const CreateVenuePage = (): JSX.Element => {
  return (
    <CreateVenuePageStyled>
      <CreateVenueForm />
    </CreateVenuePageStyled>
  );
};

export default CreateVenuePage;
