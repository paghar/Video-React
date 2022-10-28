//@flow
import React from 'react';
import TitleListView from '.';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

describe('<TitleListView />', () => {
  it('checks  UI', () => {
    const wrapper = renderer.create(<TitleListView />).toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
