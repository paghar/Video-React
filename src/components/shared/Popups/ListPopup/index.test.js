//@flow
import React from 'react';
import ListPopup from '.';
import renderer from 'react-test-renderer';
import { Display2 } from 'theme/fonts';
import { mount } from 'enzyme';
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

describe('<ListPopup />', () => {
  it('click in list item', () => {
    const itemListClick = jest.fn();
    const wrapper = mount(
      <ListPopup
        popupItems={SimplePopupData}
        backgroundColor={Generals.viii}
        width="121px"
        height="199px"
        borderRadius="7px"
        font={Display2}
        color={Generals.vi}
        hoverColor={Generals.ii}
        hoverBackgroundColor={Generals.x}
        clicked={itemListClick}
      ></ListPopup>
    );
    wrapper
      .find('div')
      .at(6)
      .simulate('click');
    expect(itemListClick).toHaveBeenCalled();
    expect(itemListClick.mock.calls[0][0]).toEqual({
      children: [],
      id: 3,
      title: 'Type',
    });
  });

  it('SortPopup', () => {
    const itemListClick = jest.fn();
    const wrapper = renderer
      .create(
        <ListPopup
          popupItems={SimplePopupData}
          backgroundColor={Generals.viii}
          width="121px"
          height="199px"
          borderRadius="7px"
          font={Display2}
          color={Generals.vi}
          hoverColor={Generals.ii}
          hoverBackgroundColor={Generals.x}
          clicked={itemListClick}
        ></ListPopup>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('RightClickPopup', () => {
    const itemListClick = jest.fn();
    const wrapper = renderer
      .create(
        <ListPopup
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
          clicked={itemListClick}
        ></ListPopup>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('StatusPopup', () => {
    const itemListClick = jest.fn();
    const wrapper = renderer
      .create(
        <ListPopup
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
          clicked={itemListClick}
        ></ListPopup>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('SpaceRightClickPopup', () => {
    const itemListClick = jest.fn();
    const wrapper = renderer
      .create(
        <ListPopup
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
          clicked={itemListClick}
        ></ListPopup>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('InvitePeopleDropDownList', () => {
    const itemListClick = jest.fn();
    const wrapper = renderer
      .create(
        <ListPopup
          popupItems={InviteDropDownList}
          backgroundColor={Generals.viii}
          width="126px"
          height="118px"
          borderRadius="7px"
          font={Display2}
          color={Generals.vi}
          hoverColor={Generals.ii}
          hoverBackgroundColor={Generals.x}
          clicked={itemListClick}
        ></ListPopup>
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
