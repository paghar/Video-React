//@flow
import { shallow, mount } from 'enzyme';
import React from 'react';
import renderer from 'react-test-renderer';
import { assetsReducer } from './index.reducers';
import { FOLDER_TYPE, FILE_TYPE } from 'constants/variables';
import {
  addAssetToSelectionActionCreator,
  unselectAllAssetsActionCreator,
  selectAssetActionCreator,
} from './index.actions';
import type { CardsType } from 'components/MediaBrowser/CardsHolder';

const assets: CardsType = {
  '0': {
    type: FOLDER_TYPE,
    name: 'Hiking Experience',
    fileCount: 0,
    thumbnails: [],
    customOrder: 1,
    size: '16 MB',
    uploader: 'Emily Parkson',
    uploadDate: 1553277015000,
  },
  '1': {
    type: FOLDER_TYPE,
    name: 'Going into mountains Experience',
    fileCount: 0,
    thumbnails: [],
    customOrder: 2,
    size: '16 MB',
    uploader: 'Emily Parkson',
    uploadDate: 1553277015000,
  },
};

describe('Media browser page', () => {
  it('checks reducer of add card to selection', () => {
    const newAssets = assetsReducer(
      assets,
      addAssetToSelectionActionCreator('0')
    );
    expect(newAssets['0'].selected).toBeTruthy();
  });
  it('checks reducer of unselect all cards', () => {
    const assetsWithSelected = {
      ...assets,
      '0': { ...assets['0'], selected: true },
    };
    const newAssets = assetsReducer(
      assetsWithSelected,
      unselectAllAssetsActionCreator()
    );
    expect(newAssets['0'].selected).toBeFalsy();
    expect(newAssets['1'].selected).toBeFalsy();
  });
  it('checks reducer of select a asset', () => {
    const assetsWithSelected = {
      ...assets,
      '0': { ...assets['0'], selected: true },
    };
    const newAssets = assetsReducer(
      assetsWithSelected,
      selectAssetActionCreator('1')
    );
    expect(newAssets['0'].selected).toBeFalsy();
    expect(newAssets['1'].selected).toBeTruthy();
  });
});
