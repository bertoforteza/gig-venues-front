import { JwtPayload } from "jwt-decode";
import { Venue } from "../redux/features/types";

export interface AxiosResponseBody {
  error: string;
}

export interface JwtCustomPayload extends JwtPayload {
  id: string;
  username: string;
}

export interface VenuesData {
  venues: Venue[];
  userVenues?: Venue[];
}

export interface NewVenueData {
  name: string;
  city: string;
  address: string;
  capacity: number;
  indoor: boolean;
  phoneNumber: string;
  email: string;
  picture: string | File;
  description: string;
}
