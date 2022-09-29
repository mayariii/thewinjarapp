import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ButtonComponent } from "../../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "2-Components/Button",
  component: ButtonComponent,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof ButtonComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args} />
);

export const Base = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  label: "Base Button",
};

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Add to win jar",
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   label: 'Button',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   label: 'Button',
// };
