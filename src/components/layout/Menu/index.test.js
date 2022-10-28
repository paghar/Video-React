//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import Menu from '.';
import { MenuData } from 'constants/MenuData';
import logoImage from 'assets/image/avasam-1.png';
import { Avatars } from 'theme/colors';
import imageAvatar from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';

describe('<Menu />', () => {
  it('when menu in open mode', () => {
    const togglerClick = jest.fn();
    const Component = renderer
      .create(
        <Menu
          toggleMenu={() => togglerClick()}
          menuData={MenuData}
          logoBackgroundColor="#fff"
          logoShortName="AA"
          avatarShortName="AB"
          logoImgUrl={logoImage}
          logoText="Avasam Agency"
          usedSpace="80"
          totalSpace="250"
          imageAvatar={imageAvatar}
          avatarColor="#fff"
        ></Menu>
      )
      .toJSON();
    expect(Component).toMatchSnapshot();
  });
});

describe('<Menu />', () => {
  it('when menu in close mode', () => {
    const togglerClick = jest.fn();
    const Component = renderer
      .create(
        <Menu
          isShrinked
          toggleMenu={() => togglerClick()}
          menuData={MenuData}
          logoShortName="AA"
          avatarShortName="AB"
          logoBackgroundColor="#fff"
          logoImgUrl={logoImage}
          logoText="Avasam Agency"
          usedSpace="80"
          totalSpace="250"
          imageAvatar={imageAvatar}
          avatarColor="#fff"
        ></Menu>
      )
      .toJSON();
    expect(Component).toMatchSnapshot();
  });
});
