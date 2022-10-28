//@flow
import React from 'react';
import ActivityItem from '.';
import renderer from 'react-test-renderer';
import { create } from 'react-test-renderer';
import { twoDigitMinutes } from 'helpers/time';
import image from 'assets/image/christopher-campbell-rDEOVtE7vOs-unsplash.png';
const item = {
  avatarSrc: image,
  shortName: 'SP',
  name: 'Sara Parker',
  createdAt: 1570700342376,
  text: 'Uploaded "aportman family"',
  avatarColor: '#fff',
};

describe('<Activity />', () => {
  it('checks the UI', () => {
    const wrapper = renderer
      .create(
        <ActivityItem
          shortName={item.shortName}
          avatarSrc={item.avatarSrc}
          name={item.name}
          createdAt={item.createdAt}
          text={item.text}
          avatarColor={item.avatarColor}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });

  it('test the epoch input function', () => {
    expect(twoDigitMinutes(1234567890)).toBe('26');
  });
  it('test the epoch input to be 2digits', () => {
    expect(twoDigitMinutes(1570700342376)).toBe('09');
  });
});
