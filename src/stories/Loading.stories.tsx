import { ComponentMeta } from "@storybook/react";
import Loading from "../components/Loading/Loading";

export default {
  title: "Loading",
  component: Loading,
} as ComponentMeta<typeof Loading>;

export const Default = () => <Loading />;
