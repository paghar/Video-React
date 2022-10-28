//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import { Display6 } from 'theme/fonts';
import SearchBar from '.';
import { shallow, mount } from 'enzyme';
import { Avatars as AvatarColors } from 'theme/colors';
import image from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';
import Avatar from 'components/shared/Avatar';

describe('<MediaBrowserHeaderSearchBar />', () => {
  it('Header SearchBar Icon Change', () => {
    const wrapper = mount(<SearchBar />);
    expect(
      wrapper
        .find('span')
        .text()
        .charCodeAt(0)
    ).toEqual(61442);
    wrapper.find('input').simulate('change', { target: { value: 'holy wow' } });
    expect(
      wrapper
        .find('span')
        .text()
        .charCodeAt(0)
    ).toEqual(61453);
    wrapper.find('span').simulate('click');
    expect(
      wrapper
        .find('span')
        .text()
        .charCodeAt(0)
    ).toEqual(61442);
  });
  it('Header SearchBar Icon Change on Cleaning input', () => {
    const wrapper = mount(<SearchBar />);
    expect(
      wrapper
        .find('span')
        .text()
        .charCodeAt(0)
    ).toEqual(61442);
    wrapper.find('input').simulate('change', { target: { value: 'holy wow' } });
    expect(
      wrapper
        .find('span')
        .text()
        .charCodeAt(0)
    ).toEqual(61453);
    wrapper.find('input').simulate('change', { target: { value: '' } });
    expect(
      wrapper
        .find('span')
        .text()
        .charCodeAt(0)
    ).toEqual(61442);
  });
});
