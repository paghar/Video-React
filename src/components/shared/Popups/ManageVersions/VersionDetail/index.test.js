//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import VersionDetail from '.';
import Image from 'assets/image/Man_in_biker_1.png';

describe('<VersionDetail />', () => {
  it('VersionDetail', () => {
    const closeClicked = jest.fn();
    const tree = renderer
      .create(
        <VersionDetail
          id={1}
          versionNumber="V1"
          thumbnailUrl={Image}
          assetName="Day10-month 12-halllow day.MP4"
          assetDetail="John Rasel . Sep 3rd . 15:30"
          closeClicked={closeClicked}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

