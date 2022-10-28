//@flow
import React from 'react';
import RightSide from '.';
import renderer from 'react-test-renderer';
import testData from 'components/MediaBrowser/RightSide/Activity/testData';
describe('<TimeSeprator />', () => {
  it('checks the UI', () => {
    const wrapper = renderer
      .create(<RightSide activities={testData} />)
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
