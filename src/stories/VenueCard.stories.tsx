import { ComponentMeta, ComponentStory } from "@storybook/react";
import VenueCard from "../components/VenueCard/VenueCard";

export default {
  title: "Venue Card",
  component: VenueCard,
} as ComponentMeta<typeof VenueCard>;

const Template: ComponentStory<typeof VenueCard> = (args) => (
  <ul>
    <VenueCard {...args} />
  </ul>
);

export const Default = Template.bind({});

Default.args = {
  name: "Razzmatazz",
  city: "Barcelona",
  capacity: 1500,
  backupPicture:
    "https://www.metropoliabierta.com/uploads/s1/16/30/95/4/discoteca-razzmatazz_5_570x340.jpeg",
};
