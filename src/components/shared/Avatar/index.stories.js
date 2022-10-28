import React from 'react';
import { action } from '@storybook/addon-actions';
import Story from '.';
import { Display3 } from 'theme/fonts';
import image from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';

export default { title: 'Avatar' };

export const Avatar = () => (
  <Story
    backgroundColor="#5c4dff"
    imgUrl={image}
    width="31px"
    height="31px"
    borderRadius="100%"
    font={Display3}
    color="#ffffff"
    avatarClick={action('avatarClick')}
  >
    PZ
  </Story>
);

export const NoimageAvatar = () => (
  <Story
    backgroundColor="#5c4dff"
    width="33px"
    height="33px"
    borderRadius="100%"
    font={Display3}
    color="#ffffff"
  >
    PZ
  </Story>
);

export const WithBorder = () => (
  <Story
    backgroundColor="#5c4dff"
    isBorder
    width="31px"
    height="31px"
    borderRadius="100%"
    font={Display3}
    color="#ffffff"
  >
    PZ
  </Story>
);

export const WithImageBorder = () => (
  <Story
    backgroundColor="#5c4dff"
    imgUrl={image}
    isBorder
    width="31px"
    height="31px"
    borderRadius="100%"
    font={Display3}
    color="#ffffff"
  >
    PZ
  </Story>
);

export const differentSize = () => (
  <Story
    backgroundColor="#5c4dff"
    isBorder
    width="100px"
    height="100px"
    borderRadius="100%"
    font={Display3}
    color="#ffffff"
  >
    PZ
  </Story>
);
