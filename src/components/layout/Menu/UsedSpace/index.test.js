//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import UsedSpace from '.';

describe('<UsedSpace />', () => {
  it('when Menu in open mode', () => {
    const tree = renderer
      .create(<UsedSpace usedSpace="80" totalSpace="250"></UsedSpace>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<UsedSpace />', () => {
  it('when Menu in close mode', () => {
    const tree = renderer
      .create(<UsedSpace usedSpace="80" totalSpace="250"></UsedSpace>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
