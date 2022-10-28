//@flow
import React from 'react';
import { mount } from 'enzyme';
import Setting from '.';
import imageAvatar from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';
import { Avatars } from 'theme/colors';

describe('<Setting/>', () => {
  it('button click should change isShrinked state', () => {
    const togglerClick = jest.fn();
    const component = mount(
      <Setting
        avatarShortName="AB"
        avatarColor="#fff"
        isShrinked
        toggleMenu={togglerClick}
        imageAvatar={imageAvatar}
      />
    );
    component
      .find('button')
      .at(3)
      .simulate('click');
    expect(togglerClick).toHaveBeenCalled();
  });
});
