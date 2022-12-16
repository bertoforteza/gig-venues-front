import { rest } from "msw";
import { UserCredentials } from "../data/types";
import mockVenuesList from "./mockVenuesList";

const url = process.env.REACT_APP_API_URL;
const { id } = mockVenuesList[1];
const { id: idToGet } = mockVenuesList[0];

const handlers = [
  rest.post(`${url}/user/register`, async (req, res, ctx) => {
    const user = await req.json<UserCredentials>();
    const { username } = user;

    if (username === "registeredAdmin") {
      return res(
        ctx.status(409),
        ctx.json({ error: "This username is already registered" })
      );
    }

    return res(ctx.status(201), ctx.json({ user }));
  }),

  rest.post(`${url}/user/login`, async (req, res, ctx) => {
    const { password } = await req.json<UserCredentials>();

    if (password === "password") {
      return res(
        ctx.status(401),
        ctx.json({ error: "Incorrect username or password" })
      );
    }
    return res(ctx.status(200), ctx.json({ token: "adminToken" }));
  }),

  rest.get(`${url}/venues`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json({ venues: mockVenuesList }));
  }),

  rest.get(`${url}/venues`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json({ venues: mockVenuesList }));
  }),

  rest.get(`${url}/venues`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "Something went wrong" })
    );
  }),

  rest.get(`${url}/venues/my-venues`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json({ userVenues: mockVenuesList }));
  }),

  rest.get(`${url}/venues/my-venues`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json({ userVenues: mockVenuesList }));
  }),

  rest.get(`${url}/venues/my-venues`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "Something went wrong" })
    );
  }),

  rest.delete(`${url}/venues/delete/${id}`, async (req, res, ctx) => {
    return res.once(ctx.status(200));
  }),

  rest.delete(`${url}/venues/delete/${id}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "Something went wrong" })
    );
  }),

  rest.post(`${url}/venues/new-venue`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "There was an error creating the venue" })
    );
  }),

  rest.post(`${url}/venues/new-venue`, async (req, res, ctx) => {
    return res.once(ctx.status(200));
  }),

  rest.get(`${url}/venues/${idToGet}`, async (req, res, ctx) => {
    return res.once(ctx.status(200), ctx.json(mockVenuesList[0]));
  }),

  rest.get(`${url}/venues/${idToGet}`, async (req, res, ctx) => {
    return res.once(
      ctx.status(500),
      ctx.json({ error: "Could not find the venue" })
    );
  }),
];

export default handlers;
