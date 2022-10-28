import React from 'react';
import { addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import Story from '.';
import { Display2 } from 'theme/fonts';
import { action } from '@storybook/addon-actions';
import { POP_UP_LINE, POP_UP_HAS_SUBITEMS } from 'constants/variables';
import { Secondary, Generals } from 'theme/colors';

// itemType  => null:text , hr:line , subItem:have sub items
const SimplePopupData = [
  { id: 1, title: 'Name', children: [] },
  { id: 2, title: 'Size', children: [] },
  { id: 3, title: 'Type', children: [] },
  {
    id: 4,
    title: 'Date uploaded',
    children: [],
  },
  { id: 5, title: 'Status', children: [] },
  { id: 6, title: 'Tag', children: [] },
  { id: 7, title: 'Custom', children: [] },
];

const RightPopupData = [
  {
    id: 1,
    icon: '61920',
    title: 'Share',
    children: [],
  },
  {
    id: 2,
    icon: '61539',
    title: 'Download',
    children: [],
  },
  {
    id: 3,
    icon: '61508',
    title: 'Rename',
    children: [],
  },
  {
    id: 4,
    icon: '62306',
    title: 'Manage versions',
    children: [],
  },
  {
    id: 5,
    icon: '62189',
    title: 'Delete',
    children: [],
  },
];

const StatusPopupData = [
  {
    id: 1,
    icon: '61713',
    title: 'In Progress',
    iconColor: Secondary.iv,
    children: [],
  },
  {
    id: 2,
    icon: '61713',
    title: 'In Review',
    iconColor: Secondary.ii,
    children: [],
  },
  {
    id: 3,
    icon: '61713',
    title: 'Done',
    iconColor: Secondary.i,
    children: [],
  },
  {
    id: 4,
    icon: '61453',
    title: 'No status',
    iconColor: Generals.vi,
    children: [],
  },
];

const SpaceRightPopup = [
  {
    id: 1,
    icon: '61563',
    title: 'New folder',
    children: [],
  },
  {
    id: 2,
    icon: '61459',
    title: 'Project setting',
    children: [],
  },
  {
    id: 3,
    itemType: POP_UP_LINE,
    icon: '61459',
    title: 'Project setting',
    children: [],
  },
  {
    id: 4,
    itemType: POP_UP_HAS_SUBITEMS,
    icon: '62306',
    title: 'Sort by ',
    children: [
      { id: 1, title: 'Name', children: [] },
      { id: 2, title: 'Size', children: [] },
      { id: 3, title: 'Type', children: [] },
      {
        id: 4,
        title: 'Date uploaded',
        children: [],
      },
      { id: 5, title: 'Status', children: [] },
      { id: 6, title: 'Tag', children: [] },
      { id: 7, title: 'Custom', children: [] },
    ],
  },
];

const InviteDropDownList = [
  { id: 1, title: 'Collabrator', children: [] },
  { id: 2, title: 'Project owner', children: [] },
  { id: 3, title: 'Team member', children: [] },
  {
    id: 4,
    title: 'Admin',
    children: [],
  },
];

export default { title: 'Popups' };

addParameters({
  options: {
    theme: themes.light,
  },
});

export const SortPopup = () => (
  <Story
    popupItems={SimplePopupData}
    backgroundColor={Generals.viii}
    width="121px"
    height="199px"
    borderRadius="7px"
    font={Display2}
    color={Generals.vi}
    hoverColor={Generals.ii}
    hoverBackgroundColor={Generals.x}
    clicked={action('clicked')}
  ></Story>
);

export const RightClickPopup = () => (
  <Story
    popupItems={RightPopupData}
    backgroundColor={Generals.viii}
    width="151px"
    height="145x"
    borderRadius="7px"
    font={Display2}
    color={Generals.vi}
    hoverColor={Generals.ii}
    hoverBackgroundColor={Generals.x}
    iconSize="12px"
    clicked={action('clicked')}
  ></Story>
);

export const StatusPopup = () => (
  <Story
    popupItems={StatusPopupData}
    backgroundColor={Generals.viii}
    width="108px"
    height="118x"
    borderRadius="7px"
    font={Display2}
    color={Generals.vi}
    hoverColor={Generals.ii}
    hoverBackgroundColor={Generals.x}
    iconSize="8px"
    clicked={action('clicked')}
  ></Story>
);

export const SpaceRightClickPopup = () => (
  <Story
    popupItems={SpaceRightPopup}
    subPopupItems={SimplePopupData}
    backgroundColor={Generals.viii}
    width="139px"
    height="102px"
    subPopupWidth="121px"
    subPopupHeight="199px"
    borderRadius="7px"
    font={Display2}
    color={Generals.vi}
    hoverColor={Generals.ii}
    hoverBackgroundColor={Generals.x}
    iconSize="12px"
    clicked={action('item')}
  ></Story>
);

export const InvitePeopleDropDownList = () => (
  <Story
    popupItems={InviteDropDownList}
    backgroundColor={Generals.viii}
    width="126px"
    height="118px"
    borderRadius="7px"
    font={Display2}
    color={Generals.vi}
    hoverColor={Generals.ii}
    hoverBackgroundColor={Generals.x}
    clicked={action('clicked')}
  ></Story>
);
