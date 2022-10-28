//@flow
import React from 'react';
import TimeSeprator from '.';
import renderer from 'react-test-renderer';

describe('<TimeSeprator />', () => {
  it('checks the UI', () => {
    const wrapper = renderer
      .create(<TimeSeprator time={1570857690000} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
