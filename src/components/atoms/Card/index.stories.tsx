import React from 'react';
import {
  ComponentStory,
  ComponentMeta
} from '@storybook/react';

import Card from './index';


export default {
  title: 'Atom/Card',
  component: Card
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <Card {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  allowHover: true,
  children: (
    <p>
      Lorem ipsum dolor sit amet!
    </p>
  )
};
