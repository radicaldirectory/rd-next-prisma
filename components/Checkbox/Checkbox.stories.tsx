import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Checkbox } from './';

const meta: Meta = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story = args => <Checkbox {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
