import { ComponentMeta } from "@storybook/react";
import Header from "../components/Header/Header";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const Default = () => <Header />;
