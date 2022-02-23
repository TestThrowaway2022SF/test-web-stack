import React from 'react';
import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import Button from './index';
import { ButtonType } from "./index.d";


export default {
  title: 'Atom/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  type: ButtonType.Primary,
  onClick: () => console.log('Primary click!')
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Secondary',
  type: ButtonType.Secondary,
  onClick: () => console.log('Secondary click!')
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  type: ButtonType.Primary,
  onClick: () => console.log('Can\'t click!'),
  disabled: true
};
