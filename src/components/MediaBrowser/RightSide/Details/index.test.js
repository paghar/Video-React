//@flow
import React from 'react';
import Details from '.';
import renderer from 'react-test-renderer';
import { create } from 'react-test-renderer';
describe('<Details />', () => {
  it('checks the UI', () => {
    const wrapper = renderer.create(<Details />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
