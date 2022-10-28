//@flow
import React from 'react';
import Activity from '.';
import renderer from 'react-test-renderer';
import testData from './testData';
import { getToday, getActivityTime } from 'helpers/time';

describe('<Activity />', () => {
  it('checks the UI', () => {
    const wrapper = renderer
      .create(<Activity activities={testData} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
  it('test the function', () => {
    expect(getActivityTime(testData[2])).toBe(3);
  });
  it('test the function', () => {
    expect(getActivityTime(testData[1])).toBe(3);
  });
});
