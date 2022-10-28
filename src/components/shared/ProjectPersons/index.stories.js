//@flow
import React from 'react';
import { action } from '@storybook/addon-actions';
import ProjectPersons from '.';
import image from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';
import { Avatars as AvatarColors } from 'theme/colors';

export default { title: 'ProjectPersons' };
export const withOthers = () => (
  <ProjectPersons
    fiveProjectUsers={[
      {
        color: AvatarColors[0],
        name: 'PZ',
        image,
      },
      {
        color: AvatarColors[2],
        name: 'PZ',
      },
    ]}
    otherUsersCount={3}
    clicked={action('clicked')}
  />
);
export const withOutOthers = () => (
  <ProjectPersons
    fiveProjectUsers={[
      {
        color: AvatarColors[0],
        name: 'PZ',
        image,
      },
      {
        color: AvatarColors[2],
        name: 'PZ',
      },
    ]}
    otherUsersCount={0}
    clicked={action('clicked')}
  />
);
