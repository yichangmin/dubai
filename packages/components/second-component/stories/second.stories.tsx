import React from 'react';
import { ComponentStory } from '@storybook/react';

import { SecondComponent } from '../src';

export default {
  title: 'Components / SecondComponent',
};

const Template: ComponentStory<typeof SecondComponent> = (args) => <SecondComponent {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'this is Title',
  name: 'Second',
  description: 'SecondComponent',
};
