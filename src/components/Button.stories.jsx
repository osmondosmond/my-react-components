import React from 'react';

import Button from './Button';

export default {
  title: 'Example/Button',
  component: Button
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'wkwkw tes'
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'ini disabled',
  disabled: true
};
