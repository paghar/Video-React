//@flow
import React from 'react';
import CardsHolder from '.';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import image from 'assets/image/Colleagues_looking_at_information_on_mobile_phone_screen_Videos_Mixkit.png';
import { FOLDER_TYPE, FILE_TYPE } from 'constants/variables';
import type { CardsType } from 'components/MediaBrowser/CardsHolder';
import FolderCard from 'components/MediaBrowser/FolderCard';

import {
  SELECT_ASSET,
  START_DRAG,
  ADD_ASSET_TO_SELECTION,
} from 'pages/MediaBrowser/index.actions';

const assets: CardsType = {
  '0': {
    type: FOLDER_TYPE,
    name: 'Hiking Experience',
    fileCount: 0,
    size: '16 MB',
    thumbnails: [],
    customOrder: 1,
    uploadDate: 1553277015000,
    uploader: 'Emily Parkson',
  },
  '1': {
    type: FOLDER_TYPE,
    name: 'Going into mountains Experience',
    fileCount: 0,
    size: '16 MB',
    thumbnails: [],
    customOrder: 2,
    uploadDate: 1553277015000,
    uploader: 'Emily Parkson',
  },
};

describe('<CardsHolder />', () => {
  it('checks a card on click', () => {
    const mockCallBack = jest.fn();
    const wrapper = mount(
      <CardsHolder
        dropedOnAsset={console.log}
        dropedOnGutter={console.log}
        expanded={false}
        assetsList={assets}
        dispatchAssetsList={mockCallBack}
      />
    );
    wrapper
      .find(FolderCard)
      .at(0)
      .simulate('mousedown');
    expect(mockCallBack.mock.calls[0][0]).toEqual({
      assetId: '0',
      type: SELECT_ASSET,
    });
    wrapper
      .find(FolderCard)
      .at(1)
      .simulate('mousedown', { ctrlKey: true });

    expect(mockCallBack.mock.calls[2][0]).toEqual({
      assetId: '1',
      type: ADD_ASSET_TO_SELECTION,
    });
  });
  it('checks snapshot of holder', () => {
    const wrapper = renderer
      .create(
        <CardsHolder
          dropedOnAsset={console.log}
          dropedOnGutter={console.log}
          expanded={false}
          assetsList={assets}
          dispatchAssetsList={console.log}
        />
      )
      .toJSON();
    expect(wrapper).toMatchSnapshot();
  });
});
