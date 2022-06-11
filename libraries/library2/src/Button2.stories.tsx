import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button2 } from './Button2';

export default {
  title: 'library1/Button2',
  component: Button2,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button2>;

const Template: ComponentStory<typeof Button2> = (args) => <Button2 {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
