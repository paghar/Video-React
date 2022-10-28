//@flow
import React from 'react';
import { action } from '@storybook/addon-actions';
import Breadcrumb from '.';

export default { title: 'Breadcrumb' };
export const Breadcrumb3items = () => (
  <Breadcrumb
    clicked={action('clicked')}
    items={['Projects', 'Animal House', 'Episode1']}
  />
);
