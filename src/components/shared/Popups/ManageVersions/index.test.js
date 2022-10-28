//@flow
import React from 'react';
import renderer from 'react-test-renderer';
import ManageVersions from '.';
import { Generals } from 'theme/colors';
import { mount } from 'enzyme';
import Image from 'assets/image/Man_in_biker_1.png';

const versionsListWith3Items = [
  {
    id: 1,
    versionNumber: 'V1',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 2,
    versionNumber: 'V2',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 3,
    versionNumber: 'V3',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
];

const versionsListWith5Items = [
  {
    id: 1,
    versionNumber: 'V1',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 2,
    versionNumber: 'V2',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 3,
    versionNumber: 'V3',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 4,
    versionNumber: 'V4',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 5,
    versionNumber: 'V5',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
  {
    id: 6,
    versionNumber: 'V6',
    thumbnailUrl: Image,
    assetName: 'Day10-month 12-halllow day.MP4',
    assetDetail: 'John Rasel . Sep 3rd . 15:30',
  },
];

describe('<ManageVersions />', () => {
  it('assetUnversioned', () => {
    const assetUnversioned = jest.fn();
    const tree = mount(
      <ManageVersions
        backgroundColor={Generals.viii}
        width="425px"
        versionsList={versionsListWith3Items}
        closeClicked={jest.fn()}
        unversionAllClicked={jest.fn()}
        assetUnversioned={assetUnversioned}
      />
    );
    tree
      .find('div')
      .at(4)
      .find('button')
      .simulate('click');
    expect(assetUnversioned).toHaveBeenCalled();
    console.log(assetUnversioned.mock.calls[0][0]);
    expect(assetUnversioned.mock.calls[0][0]).toEqual(1);
  });

  it('closeClicked', () => {
    const popupCloseClick = jest.fn();
    const tree = mount(
      <ManageVersions
        backgroundColor={Generals.viii}
        width="425px"
        versionsList={versionsListWith3Items}
        closeClicked={popupCloseClick}
        unversionAllClicked={jest.fn()}
        assetUnversioned={jest.fn()}
      />
    );
    tree
      .find('button')
      .at(0)
      .simulate('click');
    expect(popupCloseClick).toHaveBeenCalled();
  });

  it('unversionAllClicked ', () => {
    const click = jest.fn();
    const tree = mount(
      <ManageVersions
        backgroundColor={Generals.viii}
        width="425px"
        versionsList={versionsListWith3Items}
        closeClicked={jest.fn()}
        unversionAllClicked={click}
        assetUnversioned={jest.fn()}
      />
    );
    tree
      .find('button')
      .at(4)
      .simulate('click');
    expect(click).toHaveBeenCalled();
  });

  it('ManageVersionsWithMore3Items', () => {
    const tree = renderer
      .create(
        <ManageVersions
          backgroundColor={Generals.viii}
          width="425px"
          versionsList={versionsListWith3Items}
          closeClicked={jest.fn()}
          unversionAllClicked={jest.fn()}
          assetUnversioned={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('ManageVersionsWithMore5Items', () => {
    const tree = renderer
      .create(
        <ManageVersions
          backgroundColor={Generals.viii}
          width="425px"
          versionsList={versionsListWith5Items}
          closeClicked={jest.fn()}
          unversionAllClicked={jest.fn()}
          assetUnversioned={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
