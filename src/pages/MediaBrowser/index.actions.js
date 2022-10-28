//@flow

export type ActionType = {
  type: string,
};

export const SELECT_ASSET = 'SELECT_ASSET_ACTION';
export const ADD_ASSET_TO_SELECTION = 'ADD_ASSET_TO_SELECTION';
export const UNSELECT_ALL_ASSETS = 'UNSELECT_ALL_ASSETS';
export const START_DRAG = 'START_DRAG';
export const END_DRAG = 'END_DRAG';
export const CHANGE_ORDER = 'CHANGE_ORDER';

export const addAssetToSelectionActionCreator = (assetId: string) => {
  return {
    type: ADD_ASSET_TO_SELECTION,
    assetId,
  };
};

export const unselectAllAssetsActionCreator = () => {
  return {
    type: UNSELECT_ALL_ASSETS,
  };
};

export const selectAssetActionCreator = (assetId: string) => {
  return {
    type: SELECT_ASSET,
    assetId,
  };
};

export const startDragActionCreator = (assetId: string) => {
  return {
    type: START_DRAG,
    assetId,
  };
};

export const endDragActionCreator = (assetId: string) => {
  return {
    type: END_DRAG,
    assetId,
  };
};

export const changeOrderActionCreator = (
  from: string,
  to: string,
  isFirst: boolean
) => {
  return {
    type: CHANGE_ORDER,
    from,
    to,
    isFirst,
  };
};
