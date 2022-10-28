//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import CardLabel from '.';

describe('<AssetCardLabel />', () => {
  it('AssetCardLabel Snapshot test', () => {
    const tree = renderer
      .create(<CardLabel labelCaption="In Progress" labelColor="green" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('AssetCardLabel Snapshot test without color', () => {
    const tree = renderer
      .create(<CardLabel labelCaption="In Progress" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
