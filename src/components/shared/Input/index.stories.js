//@flow
import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '.';
import { Display3 } from 'theme/fonts';

export default { title: 'Input' };
export const InputSearch = () => (
  <Input
    height="31px"
    width="223px"
    font={Display3}
    borderRadius="40px"
    textColor="#C4C3D9"
    backgroundColor="#212133"
    hoverBackgroundColor="#000"
    placeholder="Search here..."
    placeHolderColor="#7b7b9a"
    icon="61442"
    iconColor="#7b7b9a"
    iconSize="15px"
    paddingRL="14px"
    changed={action('changed')}
    focused={action('focused')}
    blured={action('blured')}
  />
);
export const ReverseInput = () => (
  <Input
    height="31px"
    width="223px"
    font={Display3}
    rtl
    paddingRL="14px"
    borderRadius="40px"
    iconSize="15px"
    textColor="#C4C3D9"
    backgroundColor="#212133"
    hoverBackgroundColor="#000"
    placeHolderColor="#7b7b9a"
    placeholder="Results"
    icon="61703"
    iconColor="#7b7b9a"
    changed={action('changed')}
    focused={action('focused')}
    blured={action('blured')}
  />
);
