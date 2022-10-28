import React from 'react';
import Story from '.';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import Image from 'assets/image/Man_in_biker_1.png';
import { action } from '@storybook/addon-actions';

addParameters({
  options: {
    theme: themes.dark,
  },
});

const versionsListWith3Items = [
  {
    id: 1,
    versionNumber: 'V1',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 2,
    versionNumber: 'V2',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 3,
    versionNumber: 'V3',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
];

const versionsListWith5Items = [
  {
    id: 1,
    versionNumber: 'V1',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 2,
    versionNumber: 'V2',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 3,
    versionNumber: 'V3',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 4,
    versionNumber: 'V4',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 5,
    versionNumber: 'V5',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 6,
    versionNumber: 'V6',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
];

export default { title: 'ManageVersions' };
export const ManageVersionsWithMore3Items = () => (
  <Story
    versionsList={versionsListWith3Items}
    closeClicked={action('PoupcloseClicked')}
    unversionAllClicked={action('unversionAllClicked ')}
    assetUnversioned={action('assetUnversioned')}
  />
);
export const ManageVersionsWithMore5Items = () => (
  <Story
    versionsList={versionsListWith5Items}
    closeClicked={action('PoupcloseClicked')}
    unversionAllClicked={action('unversionAllClicked ')}
    assetUnversioned={action('assetUnversioned')}
  />
);
