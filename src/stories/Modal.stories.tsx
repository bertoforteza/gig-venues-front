import { ComponentMeta, ComponentStory } from "@storybook/react";
import Modal from "../components/Modal/Modal";

export default {
  title: "Modal",
  component: Modal,
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Success = Template.bind({});

export const Error = Template.bind({});

Success.args = { isError: false, modalText: "Welcome to gig venues!" };
Error.args = { isError: true, modalText: "Something went wrong" };
