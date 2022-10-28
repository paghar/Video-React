//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '.';
import { MenuData } from 'constants/MenuData';
import logoImage from 'assets/image/avasam-1.png';
import { Avatars } from 'theme/colors';

describe('<Navigation />', () => {
  it('when menu in open mode', () => {
    const tree = renderer
      .create(
        <Navigation
          logoBackgroundColor="#fff"
          logoImgUrl={logoImage}
          logoText="Avasam Agency"
          logoShortName="AA"
          menuData={MenuData}
        ></Navigation>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<Navigation />', () => {
  it('when menu in close mode', () => {
    const tree = renderer
      .create(
        <Navigation
          isShrinked
          logoBackgroundColor="#fff"
          logoImgUrl={logoImage}
          logoText="Avasam Agency"
          logoShortName="AA"
          menuData={MenuData}
        ></Navigation>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
