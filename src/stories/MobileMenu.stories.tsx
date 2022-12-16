import { ComponentMeta } from "@storybook/react";
import MobileMenu from "../components/MobileMenu/MobileMenu";

export default {
  title: "Mobile Menu",
  component: MobileMenu,
} as ComponentMeta<typeof MobileMenu>;

export const Default = () => <MobileMenu />;
