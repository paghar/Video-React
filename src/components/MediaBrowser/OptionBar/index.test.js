//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import OptionBar from '.';

describe('<OptionBar/>', () => {
  it('OptionBar with filenumber equal 2 digits ', () => {
    const tree = renderer
      .create(<OptionBar fileNumber="25" fileSize="800MB"></OptionBar>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('OptionBar with filenumber equal 7 digits ', () => {
    const tree = renderer
      .create(<OptionBar fileNumber="1000000" fileSize="800MB"></OptionBar>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
