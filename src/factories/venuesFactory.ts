import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { NewVenueData } from "../hooks/types";
import { Venue } from "../redux/features/types";

const venuesFactory = Factory.define<Venue>(() => ({
  address: faker.address.direction(),
  capacity: faker.datatype.number(5000),
  city: faker.address.cityName(),
  email: faker.internet.email(),
  indoor: faker.datatype.boolean(),
  name: faker.name.fullName(),
  phoneNumber: faker.phone.number(),
  picture: faker.image.nightlife(),
  id: faker.database.mongodbObjectId(),
  description: faker.lorem.paragraph(),
  backupPicture: faker.image.nightlife(),
}));

const newVenueFactory = Factory.define<NewVenueData>(() => ({
  address: faker.address.direction(),
  capacity: faker.datatype.number(5000),
  city: faker.address.cityName(),
  email: faker.internet.email(),
  indoor: faker.datatype.boolean(),
  name: faker.name.fullName(),
  phoneNumber: faker.phone.number(),
  picture: faker.image.nightlife(),
  description: faker.lorem.paragraph(),
}));

export const getRandomVenue = () => venuesFactory.build();
export const getNewRandomVenue = () => newVenueFactory.build();

export const getRandomVenuesList = (number: number) =>
  venuesFactory.buildList(number);
