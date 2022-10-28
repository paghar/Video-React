//@flow
import React, { useState, useReducer, useEffect } from 'react';
import MediaBrowserLayout from 'components/layout/MediaBrowser';
import { MEDIA_BROWSER_RIGHT_SIDE_MENU_ANIMATION_DURATION } from 'constants/variables';
import { findParent } from 'helpers';
import { assetsReducer } from './index.reducers';
import {
  unselectAllAssetsActionCreator,
  changeOrderActionCreator,
} from './index.actions';
import assetsTemp from './assetsTemp';

const MediaBrowser = () => {
  const [assetsList, dispatchAssetsList] = useReducer(
    assetsReducer,
    assetsTemp
  );
  // handle outside of an asset clicked
  const handleClickOnDocument = (event: Event) => {
    const figureClicked = findParent(event.target, 'FIGURE');
    if (!figureClicked) dispatchAssetsList(unselectAllAssetsActionCreator());
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOnDocument);
    return () => {
      document.removeEventListener('mousedown', handleClickOnDocument);
    };
  }, []);

  const [isRightMenuOpen, setRightMenuShown] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  // toggle showing of right side menu
  const toggleRightMenu = () => {
    setRightMenuShown(!isRightMenuOpen);
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, MEDIA_BROWSER_RIGHT_SIDE_MENU_ANIMATION_DURATION + 300);
  };

  // toggle showing of Listview
  const toggleListView = () => {
    setExpanded(!isExpanded);
  };
  const dropedOnAsset = (from, to) => {
    console.log('a', from, to);
  };
  const dropedOnGutter = (from, to, isFirst) => {
    dispatchAssetsList(changeOrderActionCreator(from, to, isFirst));
  };
  return (
    <MediaBrowserLayout
      dispatchAssetsList={dispatchAssetsList}
      dropedOnAsset={dropedOnAsset}
      dropedOnGutter={dropedOnGutter}
      assetsList={assetsList}
      expanded={isExpanded}
      toggleListView={toggleListView}
      isRightMenuOpen={isRightMenuOpen}
      toggleRightMenu={toggleRightMenu}
    />
  );
};

export default MediaBrowser;
