import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FirstComponent } from '../src';

export default {
  title: 'Components / FirstComponent',
};

const Template: ComponentStory<typeof FirstComponent> = (args) => <FirstComponent {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  name: 'first',
  description: 'FirstComponent',
};
